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

Use these public build variables only for a production build:

```sh
PUBLIC_SITE_ENV=production
PUBLIC_SITE_ORIGIN=https://your-real-site-origin
PUBLIC_SUPPORT_EMAIL=real-support-address
PUBLIC_SECURITY_EMAIL=real-security-address
npm run verify
```

Production rejects a non-HTTPS origin and placeholder or invalid contact addresses. Do not put secrets in public build variables.

## Deployment and headers

Deploy the `dist/` directory as static files. Configure HTTPS redirects at the host. Set a restrictive baseline such as:

```text
Content-Security-Policy: default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'
Referrer-Policy: no-referrer
X-Content-Type-Options: nosniff
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Review headers against the deployed host before release.

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
