#!/usr/bin/env bash
# Container routing, header, and crawl-surface checks.
#   bash scripts/smoke-container.sh http://127.0.0.1:18081 production|preview
set -euo pipefail
base="$1"
mode="$2"
host='Host: aliasmode.com'

status() { curl --silent --output /dev/null --write-out '%{http_code}' -H "$host" "$base$1"; }
location() { curl --silent --head -H "$host" "$base$1" | tr -d '\r' | awk 'tolower($1)=="location:" {print $2}'; }
expect_redirect() {
  local code; code="$(status "$1")"
  local target; target="$(location "$1")"
  if [ "$code" != "308" ] || [ "$target" != "$2" ]; then
    echo "expected $1 -> 308 $2, got $code ${target:-<none>}" >&2; exit 1
  fi
  case "$target" in *:8080*) echo "redirect leaks the container port: $target" >&2; exit 1;; esac
}
expect_status() {
  local code; code="$(status "$1")"
  if [ "$code" != "$2" ]; then echo "expected $1 -> $2, got $code" >&2; exit 1; fi
}

expect_status / 200
expect_status /product/ 200
expect_status /docs/local-api/ 200
expect_redirect /product /product/
expect_redirect /local-vs-cloud /local-vs-cloud/
expect_redirect '/product?utm_source=test' '/product/?utm_source=test'
expect_redirect /product/index.html /product/
expect_redirect /index.html /
expect_status /favicon.svg 200
expect_status /robots.txt 200
expect_status /sitemap.xml 200
expect_status /llms.txt 200
expect_status /openapi/aliasmode-local-api.json 200
expect_status /fonts/inter-latin.woff2 200
expect_status /social/comparison.png 200
expect_status /missing-page 404
expect_status /missing-page/ 404
expect_status /healthz 200

headers="$(curl --silent --head -H "$host" "$base/fonts/inter-latin.woff2" | tr -d '\r')"
grep -i '^cache-control: public, max-age=31536000, immutable' <<<"$headers" >/dev/null || { echo 'font cache headers missing' >&2; exit 1; }
grep -i '^content-type: font/woff2' <<<"$headers" >/dev/null || { echo 'font content type missing' >&2; exit 1; }
home_headers="$(curl --silent --head -H "$host" "$base/" | tr -d '\r')"
grep -i "^content-security-policy: .*font-src 'self'" <<<"$home_headers" >/dev/null || { echo 'CSP font-src missing' >&2; exit 1; }
home="$(curl --fail --silent -H "$host" "$base/")"
if grep -F 'fonts.googleapis.com' <<<"$home" >/dev/null || grep -F 'fonts.gstatic.com' <<<"$home" >/dev/null; then echo 'home references Google Fonts' >&2; exit 1; fi

if [ "$mode" = production ]; then
  curl --fail --silent -H "$host" "$base/robots.txt" | grep -Fx 'Sitemap: https://aliasmode.com/sitemap.xml' >/dev/null
  curl --fail --silent -H "$host" "$base/sitemap.xml" | grep -F '<loc>https://aliasmode.com/product/</loc>' >/dev/null
  curl --fail --silent -H "$host" "$base/sitemap.xml" | grep -F '<lastmod>' >/dev/null
  grep -F '<link rel="canonical" href="https://aliasmode.com/">' <<<"$home" >/dev/null
  grep -F 'application/ld+json' <<<"$home" >/dev/null
  grep -F 'https://aliasmode.com/_am/events' <<<"$home" >/dev/null
  if grep -F 'noindex' <<<"$home" >/dev/null; then echo 'production home is noindex' >&2; exit 1; fi
  curl --fail --silent -H "$host" "$base/privacy/v2/" | grep -F 'noindex,follow' >/dev/null
  curl --fail --silent -H "$host" "$base/llms.txt" | grep -F 'https://aliasmode.com/docs/local-api/' >/dev/null
else
  grep -F 'noindex,nofollow' <<<"$home" >/dev/null
  curl --fail --silent -H "$host" "$base/security/" | grep -F 'noindex,nofollow' >/dev/null
fi
echo "container smoke ($mode) ok"
