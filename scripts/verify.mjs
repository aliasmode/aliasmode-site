import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { siteRoutes } from '../src/data/site-routes.ts';
import { legalSnapshots } from './v1-manifest.mjs';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const fail = (message) => { throw new Error(`verify: ${message}`); };
const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
const html = files(dist).filter((file) => file.endsWith('.html'));
const production = process.env.PUBLIC_SITE_ENV === 'production';
const expectedOrigin = production ? process.env.PUBLIC_SITE_ORIGIN : 'https://aliasmode.com';
const routeFile = (path) => join(dist, path === '/' ? 'index.html' : path === '/404' ? '404.html' : `${path.replace(/^\//, '').replace(/\/$/, '')}/index.html`);
const page = (path) => { const file = routeFile(path); if (!existsSync(file)) fail(`missing route ${path}`); return readFileSync(file, 'utf8'); };
const dockerfile = readFileSync(join(root, 'Dockerfile'), 'utf8');
const dockerignore = readFileSync(join(root, '.dockerignore'), 'utf8');
const nginx = readFileSync(join(root, 'nginx.conf'), 'utf8');
const attribute = (text, tag, name) => {
  const match = text.match(new RegExp(`<${tag}[^>]*\\b${name}="([^"]+)"[^>]*>`, 'i'));
  return match?.[1];
};
const meta = (text, key, value) => {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = text.match(new RegExp(`<meta[^>]*\\b${escaped}="${value}"[^>]*\\bcontent="([^"]*)"[^>]*>|<meta[^>]*\\bcontent="([^"]*)"[^>]*\\b${escaped}="${value}"[^>]*>`, 'i'));
  return match?.[1] ?? match?.[2];
};
const canonicalFrom = (text) => text.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/i)?.[1];
const jsonLdFrom = (text) => [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));

if ((dockerfile.match(/^FROM /gm) ?? []).length !== 2) fail('Dockerfile must have build and runtime stages');
if (!dockerfile.includes('FROM nginxinc/nginx-unprivileged:')) fail('runtime image must use unprivileged NGINX');
for (const variable of ['PUBLIC_SITE_ENV', 'PUBLIC_SITE_ORIGIN', 'PUBLIC_SUPPORT_EMAIL', 'PUBLIC_SECURITY_EMAIL', 'PUBLIC_GOOGLE_SITE_VERIFICATION', 'PUBLIC_BING_SITE_VERIFICATION', 'PUBLIC_ANALYTICS_ENDPOINT']) {
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

const routePaths = siteRoutes.map((route) => route.path);
if (new Set(routePaths).size !== routePaths.length) fail('route registry contains duplicate paths');
for (const route of siteRoutes) {
  if (route.path !== '/' && !route.path.endsWith('/')) fail(`${route.path} is not a canonical trailing-slash route`);
  page(route.path);
}
for (const route of ['/auth/email-confirmation', '/auth/password-reset', '/404']) page(route);

const titleSet = new Set();
const descriptionSet = new Set();
for (const route of siteRoutes) {
  const text = page(route.path);
  const title = text.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = meta(text, 'name', 'description');
  if (!title || !title.endsWith(' · AliasMode')) fail(`${route.path} has no complete title`);
  if (!description) fail(`${route.path} has no meta description`);
  if (titleSet.has(title)) fail(`${route.path} repeats title ${title}`);
  if (descriptionSet.has(description)) fail(`${route.path} repeats its meta description`);
  titleSet.add(title);
  descriptionSet.add(description);
  for (const [key, value] of [['property', 'og:title'], ['property', 'og:description'], ['property', 'og:url'], ['property', 'og:image'], ['name', 'twitter:card'], ['name', 'twitter:title'], ['name', 'twitter:description'], ['name', 'twitter:image']]) {
    if (!meta(text, key, value)) fail(`${route.path} is missing ${value}`);
  }
  const schemas = jsonLdFrom(text);
  if (!schemas.length) fail(`${route.path} is missing JSON-LD`);
  if (route.parent) {
    if (!text.includes('data-breadcrumbs')) fail(`${route.path} is missing visible breadcrumbs`);
    if (!JSON.stringify(schemas).includes('BreadcrumbList')) fail(`${route.path} is missing BreadcrumbList JSON-LD`);
  }
}

const socialImage = join(dist, 'social/aliasmode-open-source-antidetect-browser.png');
if (!existsSync(socialImage)) fail('social sharing image is missing');
const png = readFileSync(socialImage);
if (png.readUInt32BE(16) !== 1200 || png.readUInt32BE(20) !== 630) fail('social sharing image must be 1200x630');
if (production && process.env.PUBLIC_GOOGLE_SITE_VERIFICATION && meta(page('/'), 'name', 'google-site-verification') !== process.env.PUBLIC_GOOGLE_SITE_VERIFICATION) fail('Google site verification is missing');
if (production && process.env.PUBLIC_BING_SITE_VERIFICATION && meta(page('/'), 'name', 'msvalidate.01') !== process.env.PUBLIC_BING_SITE_VERIFICATION) fail('Bing site verification is missing');
if (production && process.env.PUBLIC_ANALYTICS_ENDPOINT) {
  const product = page('/product/');
  if (!product.includes('data-track-cta') || !product.includes('navigator.sendBeacon') || !product.includes(process.env.PUBLIC_ANALYTICS_ENDPOINT)) fail('configured aggregate CTA measurement is missing');
  if (page('/auth/email-confirmation').includes(process.env.PUBLIC_ANALYTICS_ENDPOINT)) fail('auth callbacks must omit CTA measurement');
}

const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedSitemapUrls = siteRoutes
  .filter((route) => route.sitemap !== false)
  .map((route) => new URL(route.path, expectedOrigin).toString())
  .sort((a, b) => a.localeCompare(b));
if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedSitemapUrls)) fail('sitemap does not match the sorted indexable route registry');
if (sitemap.includes('/auth/') || sitemap.includes('/404')) fail('sitemap contains a private route');

const home = page('/');
const pricing = page('/pricing/');
if (!home.includes('href="/download/"') || !pricing.includes('href="/download/"')) fail('home and pricing must link to the download flow');
for (const [route, text] of [['/', home], ['/pricing/', pricing]]) {
  for (const copy of ['Cloud', 'Local', 'Premium Support', '$0', 'Talk to sales', 'All AliasMode functionality is free.', 'Premium Support purchases support, not feature access.']) {
    if (!text.includes(copy)) fail(`${route} is missing pricing copy: ${copy}`);
  }
}
for (const copy of ['AdsPower-compatible local API', 'Playwright CDP', '/api/v1/browser/start']) {
  if (!home.includes(copy)) fail(`home is missing API copy: ${copy}`);
}
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
const expectedRobots = production
  ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', expectedOrigin)}\n`
  : 'User-agent: *\nDisallow: /\n';
if (robots !== expectedRobots) fail(`${production ? 'production' : 'preview'} robots policy is incorrect`);

const frozenLegal = new Set(['acceptable-use/v1/index.html', 'privacy/v1/index.html', 'terms/v1/index.html']);
for (const file of html) {
  const text = readFileSync(file, 'utf8');
  const builtPath = relative(dist, file);
  const privatePage = builtPath === '404.html' || builtPath.startsWith('auth/');
  const shouldIndex = production && !privatePage;
  if (shouldIndex && text.includes('noindex,nofollow')) fail(`${builtPath} must be indexable in production`);
  if (shouldIndex && !canonicalFrom(text)) fail(`${builtPath} must have a production canonical URL`);
  if (!shouldIndex && !text.includes('noindex,nofollow')) fail(`${builtPath} must be noindex`);
  if (!shouldIndex && canonicalFrom(text)) fail(`${builtPath} must omit its canonical URL`);
  if (shouldIndex) {
    const routePath = builtPath === 'index.html' ? '/' : `/${builtPath.replace(/index\.html$/, '')}`;
    const expectedCanonical = new URL(routePath, expectedOrigin).toString();
    if (canonicalFrom(text) !== expectedCanonical) fail(`${builtPath} canonical must be ${expectedCanonical}`);
  }
  for (const match of text.matchAll(/\bhref=(?:"([^"]*)"|'([^']*)')/g)) {
    const href = match[1] ?? match[2];
    if (!href.startsWith('/')) continue;
    const path = href.split(/[?#]/, 1)[0];
    if (!existsSync(routeFile(path)) && !existsSync(join(dist, path))) fail(`${relative(dist, file)} links to missing ${path}`);
    const hasExtension = /\/[^/]+\.[a-z0-9]+$/i.test(path);
    if (!frozenLegal.has(builtPath) && path !== '/' && path && !hasExtension && !path.endsWith('/')) fail(`${builtPath} links to noncanonical ${path}`);
  }
}

for (const route of siteRoutes.filter((entry) => ['documentation', 'comparison', 'integration', 'use-case', 'guide', 'tool', 'article'].includes(entry.kind))) {
  const text = page(route.path);
  if ((text.match(/<h[12][^>]*>/g) ?? []).length < 3) fail(`${route.path} needs substantive heading structure`);
  if (!text.includes('data-page-family')) fail(`${route.path} is missing its content family marker`);
  const internalLinks = new Set([...text.matchAll(/href="(\/[^"#?]+\/?)"/g)].map((match) => match[1]));
  if (internalLinks.size < 3) fail(`${route.path} needs parent and related internal links`);
}

for (const route of ['/alternatives/adspower/', '/alternatives/gologin/', '/alternatives/multilogin/', '/alternatives/dolphin-anty/']) {
  const text = page(route);
  for (const copy of ['Facts last verified', 'Who should choose each product?', 'Migration plan', 'Official product evidence', 'Choose AliasMode when']) {
    if (!text.includes(copy)) fail(`${route} is missing comparison evidence: ${copy}`);
  }
  if ((text.match(/rel="noreferrer"/g) ?? []).length < 4) fail(`${route} needs dated official sources`);
}

const localApi = page('/docs/local-api/');
for (const endpoint of ['GET /status', 'GET /api/v1/status', 'GET /api/v1/browser/start?user_id=&launch_args=', 'GET /api/v1/browser/stop?user_id=', 'GET /api/v1/browser/active?user_id=', 'POST /api/v2/browser-profile/delete-cache', 'GET /api/v1/browser/cookies?user_id=&urls=', 'GET /api/v1/group/list', 'POST /api/v1/group/create', 'GET /api/v1/user/list', 'POST /api/v1/user/create', 'POST /api/v1/user/delete', 'POST /api/v1/user/update']) {
  if (!localApi.includes(endpoint.replaceAll('&', '&amp;'))) fail(`/docs/local-api/ is missing ${endpoint}`);
}
for (const route of ['/docs/local-api/', '/docs/playwright/', '/integrations/playwright/']) {
  const text = page(route);
  if (!text.includes('data.ws.puppeteer') || !text.includes('chromium.connectOverCDP')) fail(`${route} is missing the supported CDP connection`);
}
const calculator = page('/tools/agency-proxy-budget-calculator/');
for (const copy of ['Browser profiles', 'Profiles per proxy', 'Monthly cost per proxy', 'Required proxies', 'Estimated monthly cost', 'Math.ceil', 'toFixed(2)']) {
  if (!calculator.includes(copy)) fail(`calculator is missing ${copy}`);
}
const providers = page('/blog/static-residential-proxies-browser-profiles/');
for (const name of ['Bright Data', 'Oxylabs', 'IPRoyal', 'Proxy-Seller', 'SOAX', 'Outreach Proxy']) {
  if (!providers.includes(name)) fail(`provider research is missing ${name}`);
}

const download = page('/download/');
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
console.log(`Verified ${html.length} pages, ${siteRoutes.length} registry routes, sitemap, metadata, structured data, internal links, ${production ? 'production' : 'preview'} policy, SEO content, release state, auth callbacks, legal snapshots, and deployment config.`);
