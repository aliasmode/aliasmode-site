// Third-party bot-detection test results for the CloakBrowser runtime.
// Point-in-time results from public test services; detection vendors update
// their checks continuously, so keep `lastTested` current when re-running.

export const detectionLastTested = '2026-08-10';

export interface DetectionResult {
  check: string;
  standard: string;
  cloak: string;
  note: string;
}

export const detectionBaseline =
  'Standard automated browser (out-of-the-box Playwright or headless Chrome/Chromium)';

export const liveServiceResults: DetectionResult[] = [
  {
    check: 'Google reCAPTCHA v3 score',
    standard: '0.1 — flagged as a bot',
    cloak: '0.9 — rated human',
    note: 'Score verified server-side by Google.',
  },
  {
    check: 'Cloudflare Turnstile (non-interactive)',
    standard: 'Fail',
    cloak: 'Pass',
    note: 'Resolves automatically, no checkbox.',
  },
  {
    check: 'Cloudflare Turnstile (managed)',
    standard: 'Fail',
    cloak: 'Pass',
    note: 'Resolves with a single click.',
  },
  {
    check: 'ShieldSquare',
    standard: 'Blocked',
    cloak: 'Pass',
    note: 'Tested on a production site protected by ShieldSquare.',
  },
  {
    check: 'FingerprintJS bot detection',
    standard: 'Detected',
    cloak: 'Pass',
    note: 'Tested on demo.fingerprint.com.',
  },
  {
    check: 'BrowserScan bot detection',
    standard: 'Detected',
    cloak: 'Normal (4/4 checks)',
    note: 'Tested on browserscan.net.',
  },
  {
    check: 'bot.incolumitas.com',
    standard: '13 failed checks',
    cloak: 'Pass',
    note: 'All bot checks passed.',
  },
  {
    check: 'deviceandbrowserinfo.com',
    standard: '6 bot flags raised',
    cloak: '0 flags — isBot: false',
    note: 'No automation flags reported.',
  },
];

export const browserInternalsResults: DetectionResult[] = [
  {
    check: 'navigator.webdriver',
    standard: 'true (reveals automation)',
    cloak: 'false',
    note: 'Patched at the browser source level, not by injected scripts.',
  },
  {
    check: 'navigator.plugins.length',
    standard: '0 (no plugins)',
    cloak: '5',
    note: 'Reports a real plugin list like a normal Chrome install.',
  },
  {
    check: 'window.chrome',
    standard: 'undefined',
    cloak: 'Present',
    note: 'Exists, as it does in real Chrome.',
  },
  {
    check: 'User-Agent string',
    standard: 'Contains “HeadlessChrome”',
    cloak: 'Chrome/150.0.0.0',
    note: 'No headless-mode leak.',
  },
  {
    check: 'CDP automation detection',
    standard: 'Detected',
    cloak: 'Not detected',
    note: 'isAutomatedWithCDP reports false.',
  },
  {
    check: 'TLS fingerprint (JA3N / JA4 / Akamai)',
    standard: 'Mismatch with real Chrome',
    cloak: 'Identical to real Chrome',
    note: 'The encrypted connection itself looks like a genuine Chrome browser.',
  },
];

export const homepageDetectionStats = [
  {
    value: '0.9 / 1.0',
    label: 'Google reCAPTCHA v3 score — rated human',
    standard: 'A standard automated browser scores 0.1 and is flagged as a bot.',
  },
  {
    value: 'Pass',
    label: 'Cloudflare Turnstile, interactive and non-interactive',
    standard: 'A standard automated browser fails both variants.',
  },
  {
    value: '4 / 4',
    label: 'BrowserScan bot checks reported normal',
    standard: 'A standard automated browser is detected.',
  },
  {
    value: 'Identical',
    label: 'TLS fingerprint matches a real Chrome browser',
    standard: 'A standard automated browser has a mismatched fingerprint.',
  },
] as const;
