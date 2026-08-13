// Third-party bot-detection test results for the CloakBrowser runtime.
// Point-in-time results from public test services; detection vendors update
// their checks continuously, so keep `detectionLastTested` current when re-running.

export const detectionLastTested = 'Jul 2026';
export const detectionBrowserVersion = 'Chromium 150';

export interface DetectionResult {
  check: string;
  standard: string;
  cloak: string;
  note: string;
}

// "Standard" means an out-of-the-box automated browser: stock Playwright or
// headless Chrome/Chromium, the defaults most automation scripts use.
export const detectionBaselineShort = 'Standard automated browser';
export const detectionBaselineExplain =
  'A standard automated browser is out-of-the-box Playwright or headless Chrome/Chromium, the default setup most automation scripts and bots use.';

export const detectionResults: DetectionResult[] = [
  { check: 'reCAPTCHA v3', standard: '0.1 (bot)', cloak: '0.9 (human)', note: 'Server-side verified' },
  { check: 'Cloudflare Turnstile (non-interactive)', standard: 'FAIL', cloak: 'PASS', note: 'Auto-resolve' },
  { check: 'Cloudflare Turnstile (managed)', standard: 'FAIL', cloak: 'PASS', note: 'Single click' },
  { check: 'ShieldSquare', standard: 'BLOCKED', cloak: 'PASS', note: 'Production site' },
  { check: 'FingerprintJS bot detection', standard: 'DETECTED', cloak: 'PASS', note: 'demo.fingerprint.com' },
  { check: 'BrowserScan bot detection', standard: 'DETECTED', cloak: 'NORMAL (4/4)', note: 'browserscan.net' },
  { check: 'bot.incolumitas.com', standard: '13 fails', cloak: 'PASS', note: 'Bot checks passed' },
  { check: 'deviceandbrowserinfo.com', standard: '6 true flags', cloak: '0 true flags', note: 'isBot: false' },
  { check: 'navigator.webdriver', standard: 'true', cloak: 'false', note: 'Source-level patch' },
  { check: 'navigator.plugins.length', standard: '0', cloak: '5', note: 'Real plugin list' },
  { check: 'window.chrome', standard: 'undefined', cloak: 'object', note: 'Present like real Chrome' },
  { check: 'UA string', standard: 'HeadlessChrome', cloak: 'Chrome/150.0.0.0', note: 'No headless leak' },
  { check: 'CDP detection', standard: 'Detected', cloak: 'Not detected', note: 'isAutomatedWithCDP: false' },
  { check: 'TLS fingerprint', standard: 'Mismatch', cloak: 'Identical to Chrome', note: 'ja3n/ja4/akamai match' },
];
