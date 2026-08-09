# AliasMode Site

Static public site for AliasMode by Xreacher. It has no third-party assets or website analytics.

## Setup

```sh
npm ci
npm run dev
npm run verify
```

`npm run verify` type-checks, builds, and checks generated routes, internal links, preview policy, release state, auth callbacks, and frozen legal snapshots.

## Build modes

Preview is the default. It emits `noindex,nofollow`, disallows crawling in `robots.txt`, and does not invent a public domain or contact email.

Use these public build variables only for a production build. Set the origin and email variables to their real production values first.

```sh
PUBLIC_SITE_ENV=production \
PUBLIC_SITE_ORIGIN="$PUBLIC_SITE_ORIGIN" \
PUBLIC_SUPPORT_EMAIL="$PUBLIC_SUPPORT_EMAIL" \
PUBLIC_SECURITY_EMAIL="$PUBLIC_SECURITY_EMAIL" \
npm run verify
```

Production rejects a non-HTTPS origin and placeholder or invalid contact addresses. Do not put secrets in public build variables.

## VPS deployment

On a fresh Ubuntu VPS, install Git and Docker Engine:

```sh
sudo apt-get update
sudo apt-get install -y ca-certificates curl git
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
printf 'deb [arch=%s signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu %s stable\n' "$(dpkg --print-architecture)" "$(. /etc/os-release && printf '%s' "$VERSION_CODENAME")" | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
sudo usermod -aG docker "$USER"
```

Sign out and back in once so the Docker group change applies.

Configure a read-only GitHub deploy key for `aliasmode/aliasmode-site`, then clone the private repository:

```sh
git clone git@github.com:aliasmode/aliasmode-site.git
cd aliasmode-site
```

Export `PUBLIC_SITE_ORIGIN`, `PUBLIC_SUPPORT_EMAIL`, and `PUBLIC_SECURITY_EMAIL` with their real production values. Then build the image from the repository root:

```sh
docker build \
  --build-arg PUBLIC_SITE_ENV=production \
  --build-arg PUBLIC_SITE_ORIGIN \
  --build-arg PUBLIC_SUPPORT_EMAIL \
  --build-arg PUBLIC_SECURITY_EMAIL \
  --tag aliasmode-site:local .
```

Run the site on the VPS loopback interface:

```sh
docker run -d \
  --name aliasmode-site \
  --restart unless-stopped \
  --publish 127.0.0.1:8080:8080 \
  aliasmode-site:local
```

Point the VPS HTTPS reverse proxy at `http://127.0.0.1:8080`. The image serves static routes without an SPA fallback, compresses responses, adds the site security headers, and reports health at `/healthz`. Keep TLS and HTTP-to-HTTPS redirects at the reverse proxy.

Check the deployment:

```sh
curl -fsS http://127.0.0.1:8080/healthz
docker inspect --format '{{.State.Health.Status}}' aliasmode-site
```

## Release updates

Release metadata lives in `src/data/release.ts`. It is deliberately `unpublished` now. Do not activate it from a package version alone. First publish the GitHub tag and Windows asset, then set the state to `published` with the exact version, tag, `.exe` or `.msi` filename, and 64-character lowercase SHA-256. The site derives GitHub URLs from that data.

For every published Windows beta, check the GitHub release URL and SHA-256. The beta is unsigned. SmartScreen guidance must remain conditional: use **More info** then **Run anyway** only when the person accepts the risk and Windows offers it. Never advise disabling protection. A checksum is not signing.

## Current blockers

- Published GitHub tag, Windows asset name, and SHA-256.
- Real production origin, support address, and security address.
- Final reviewed legal text before treating the draft pages as final.

## Policy notes

The site has analytics off. If download intent is measured later, it must be same-origin and aggregate only. It must use no cookies, IDs, page trails, referrer data, profile data, fingerprinting, ads, or session replay.

The `/terms`, `/privacy`, and `/acceptable-use` routes are draft pages. Their `/v1` pages are frozen snapshots. Create a new version route instead of editing a v1 page; `scripts/v1-manifest.mjs` makes unintended changes fail verification.
