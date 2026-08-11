export const productFacts = {
  desktopLicense: 'Apache-2.0',
  supportedOperatingSystem: 'Windows',
  localApiOrigin: 'http://127.0.0.1:50400',
  repository: 'https://github.com/aliasmode/aliasmode',
  profiles: [
    'Persistent user-data directory',
    'Proxy and proxy credentials',
    'User agent and screen parameters',
    'Deterministic fingerprint seed',
    'Cookies and session state',
    'Groups, tags, extensions, and profile metadata',
  ],
  local: [
    'No AliasMode account',
    'No AliasMode Cloud traffic',
    'Profile data stays on that computer',
    'Loopback Local API on 127.0.0.1:50400 by default',
  ],
  cloud: [
    'Verified email and password',
    'One workspace with owner and member roles',
    'Encrypted portable-profile synchronization and local cache',
    'Device revocation and trash',
    'Version-based stale-upload detection',
    'Concurrent-open warnings and pending-upload retries',
  ],
  proxies: ['HTTP', 'HTTPS', 'SOCKS5'],
} as const;

export const localApiEndpoints = [
  'GET /status',
  'GET /api/v1/status',
  'GET /api/v1/browser/start?user_id=&launch_args=',
  'GET /api/v1/browser/stop?user_id=',
  'GET /api/v1/browser/active?user_id=',
  'POST /api/v2/browser-profile/delete-cache',
  'GET /api/v1/browser/cookies?user_id=&urls=',
  'GET /api/v1/group/list',
  'POST /api/v1/group/create',
  'GET /api/v1/user/list',
  'POST /api/v1/user/create',
  'POST /api/v1/user/delete',
  'POST /api/v1/user/update',
] as const;

export const playwrightExample = `import { chromium } from 'playwright';

const origin = '${productFacts.localApiOrigin}';
// Find this ID with GET /api/v1/user/list.
const profileId = process.env.ALIASMODE_PROFILE_ID;
if (!profileId) throw new Error('Set ALIASMODE_PROFILE_ID');

const startUrl = new URL('/api/v1/browser/start', origin);
startUrl.searchParams.set('user_id', profileId);

let browser;
let started = false;
try {
  const startResponse = await fetch(startUrl);
  if (!startResponse.ok) {
    throw new Error(\`AliasMode returned HTTP \${startResponse.status}\`);
  }

  const payload = await startResponse.json();
  const cdpUrl = payload?.data?.ws?.puppeteer;
  if (payload?.code !== 0 || typeof cdpUrl !== 'string') {
    throw new Error(payload?.msg || 'AliasMode did not return a CDP URL');
  }

  started = true;
  browser = await chromium.connectOverCDP(cdpUrl);
  // Run automation with the connected browser.
} finally {
  try {
    await browser?.close();
  } finally {
    if (started) {
      const stopUrl = new URL('/api/v1/browser/stop', origin);
      stopUrl.searchParams.set('user_id', profileId);
      await fetch(stopUrl);
    }
  }
}`;
