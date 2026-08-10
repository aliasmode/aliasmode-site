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

const response = await fetch(
  'http://127.0.0.1:50400/api/v1/browser/start?user_id=PROFILE_ID'
).then((result) => result.json());

const browser = await chromium.connectOverCDP(
  response.data.ws.puppeteer
);`;
