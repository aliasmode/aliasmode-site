import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { legalSnapshots } from './v1-manifest.mjs';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const fail = (message) => { throw new Error(`verify: ${message}`); };
const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
const html = files(dist).filter((file) => file.endsWith('.html'));
const production = process.env.PUBLIC_SITE_ENV === 'production';
const routeFile = (path) => join(dist, path === '/' ? 'index.html' : path === '/404' ? '404.html' : `${path.replace(/^\//, '').replace(/\/$/, '')}/index.html`);
const page = (path) => { const file = routeFile(path); if (!existsSync(file)) fail(`missing route ${path}`); return readFileSync(file, 'utf8'); };
const dockerfile = readFileSync(join(root, 'Dockerfile'), 'utf8');
const dockerignore = readFileSync(join(root, '.dockerignore'), 'utf8');
const nginx = readFileSync(join(root, 'nginx.conf'), 'utf8');

if ((dockerfile.match(/^FROM /gm) ?? []).length !== 2) fail('Dockerfile must have build and runtime stages');
if (!dockerfile.includes('FROM nginxinc/nginx-unprivileged:')) fail('runtime image must use unprivileged NGINX');
for (const variable of ['PUBLIC_SITE_ENV', 'PUBLIC_SITE_ORIGIN', 'PUBLIC_SUPPORT_EMAIL', 'PUBLIC_SECURITY_EMAIL']) {
  if (!dockerfile.includes(`ARG ${variable}`)) fail(`Dockerfile is missing ${variable}`);
}
for (const command of ['npm ci', 'production|preview', 'PUBLIC_SITE_ENV must be production or preview', 'npm run verify', 'COPY --from=build /app/dist/', 'HEALTHCHECK']) {
  if (!dockerfile.includes(command)) fail(`Dockerfile is missing ${command}`);
}
for (const pattern of ['node_modules', 'dist', '.env', '.env.*']) {
  if (!dockerignore.split('\n').includes(pattern)) fail(`.dockerignore is missing ${pattern}`);
}
for (const directive of ['gzip on;', 'absolute_redirect off;', 'try_files $uri/index.html $uri $uri/ =404;', 'location = /healthz', 'error_page 404 /404.html;', 'Content-Security-Policy', 'Referrer-Policy', 'X-Content-Type-Options', 'Permissions-Policy']) {
  if (!nginx.includes(directive)) fail(`NGINX config is missing ${directive}`);
}

for (const route of ['/', '/pricing', '/download', '/local-vs-cloud', '/security', '/contact', '/auth/email-confirmation', '/auth/password-reset', '/terms', '/privacy', '/acceptable-use', '/terms/v1', '/privacy/v1', '/acceptable-use/v1', '/404']) page(route);
const home = page('/');
const pricing = page('/pricing');
if (!home.includes('href="/download/"') || !pricing.includes('href="/download/"')) fail('home and pricing must link to the download flow');
for (const [route, text] of [['/', home], ['/pricing', pricing]]) {
  for (const copy of ['Cloud', 'Local', 'Premium Support', '$0', 'Talk to sales', 'All AliasMode functionality is free.', 'Premium Support purchases support, not feature access.']) {
    if (!text.includes(copy)) fail(`${route} is missing pricing copy: ${copy}`);
  }
}
for (const copy of ['AdsPower-compatible local API', 'Playwright CDP', '/api/v1/browser/start']) {
  if (!home.includes(copy)) fail(`home is missing API copy: ${copy}`);
}
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
const expectedRobots = production ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n';
if (robots !== expectedRobots) fail(`${production ? 'production' : 'preview'} robots policy is incorrect`);

for (const file of html) {
  const text = readFileSync(file, 'utf8');
  const builtPath = relative(dist, file);
  const privatePage = builtPath === '404.html' || builtPath.startsWith('auth/');
  const shouldIndex = production && !privatePage;
  if (shouldIndex && text.includes('noindex,nofollow')) fail(`${builtPath} must be indexable in production`);
  if (shouldIndex && !text.includes('rel="canonical"')) fail(`${builtPath} must have a production canonical URL`);
  if (!shouldIndex && !text.includes('noindex,nofollow')) fail(`${builtPath} must be noindex`);
  if (!shouldIndex && text.includes('rel="canonical"')) fail(`${builtPath} must omit its canonical URL`);
  for (const match of text.matchAll(/\bhref=(?:"([^"]*)"|'([^']*)')/g)) {
    const href = match[1] ?? match[2];
    if (!href.startsWith('/')) continue;
    const path = href.split(/[?#]/, 1)[0];
    if (!existsSync(routeFile(path)) && !existsSync(join(dist, path))) fail(`${relative(dist, file)} links to missing ${path}`);
  }
}

const download = page('/download');
const unpublished = download.includes('Windows beta is not published yet');
if (unpublished) {
  if (download.includes('/releases/download/') || download.includes('SHA-256: <code>')) fail('unpublished release must not expose release metadata or an asset link');
} else if (!download.includes('Download for Windows') || !download.includes('Version ') || !/\/releases\/download\/[^"']+/.test(download) || !/\/releases\/tag\/[^"']+/.test(download) || !/SHA-256: <code>[a-f0-9]{64}<\/code>/.test(download)) {
  fail('published release must show its version, asset, source, and SHA-256');
}
if (!download.includes('More info') || !download.includes('Run anyway') || !download.includes('Do not disable Windows protection')) fail('download safety guidance is incomplete');
for (const route of ['/auth/email-confirmation', '/auth/password-reset']) {
  const text = page(route);
  for (const forbidden of ['localStorage', 'sessionStorage', 'document.cookie', 'analytics', 'token']) if (text.includes(forbidden)) fail(`${route} contains forbidden callback handling`);
  const source = readFileSync(join(root, 'src/pages', `${route.slice(1)}.astro`), 'utf8');
  if (!text.includes('history.replaceState') || !source.includes("value === 'success'")) fail(`${route} must allowlist and scrub callback status`);
}
for (const [route, expected] of Object.entries(legalSnapshots)) {
  const source = join(root, 'src/pages', `${route.slice(1)}.astro`);
  const actual = createHash('sha256').update(readFileSync(source)).digest('hex');
  if (actual !== expected) fail(`${route} changed; create a new legal version instead`);
}
console.log(`Verified ${html.length} pages, internal links, ${production ? 'production' : 'preview'} policy, release state, auth callbacks, legal snapshots, and deployment config.`);
