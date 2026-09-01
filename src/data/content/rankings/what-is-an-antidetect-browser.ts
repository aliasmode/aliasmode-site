import type { RankingPage } from '../types.ts';

export const whatIsAnAntidetectBrowserRanking: RankingPage = {
  path: '/what-is-an-antidetect-browser/',
  family: 'ranking',
  variant: 'foundation',
  kind: 'article',
  label: 'What is an antidetect browser',
  title: 'What Is an Antidetect Browser? How It Works in 2026',
  description: 'An antidetect browser gives every account its own consistent device identity. Learn how profiles separate fingerprints, cookies, and IPs, and when to use one.',
  h1: 'What is an antidetect browser?',
  eyebrow: 'Foundation',
  lead: 'An antidetect browser runs many isolated browser identities on one computer. Each profile keeps its own fingerprint, cookies, and proxy, so platforms see separate devices instead of one machine wearing many logins.',
  directAnswer: 'An antidetect browser is a browser manager that gives every profile a separate, stable device identity: its own fingerprint values, cookies, storage, and exit IP. Teams use it to run many accounts safely, test localization, and give AI agents persistent sessions. AliasMode is a free, open-source option with unlimited profiles.',
  audience: 'general',
  intent: 'foundation',
  intentKey: 'foundation:what-is-an-antidetect-browser',
  topicCluster: 'foundation',
  parent: '/blog/',
  related: [
    '/best-antidetect-browsers/',
    '/browser-fingerprinting-guide/',
    '/antidetect-browser-vs-vpn-incognito-privacy-browser/',
    '/docs/browser-profiles/',
  ],
  primaryCta: {
    href: '/download/',
    label: 'Download AliasMode for Windows',
    type: 'download-installer',
  },
  secondaryCta: {
    href: '/best-antidetect-browsers/',
    label: 'See the 2026 rankings',
    type: 'compare',
  },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  sections: [
    {
      id: 'how-it-works',
      title: 'How an antidetect browser works',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'A normal browser exposes the same device signals everywhere: user agent, canvas and WebGL rendering, installed fonts, screen size, timezone, and hardware counts. Log into five accounts from one machine and every platform can see those signals match.',
            'An antidetect browser wraps each profile in its own container. The profile stores cookies and site data separately, applies a fingerprint configuration on top of the browser engine, and routes traffic through its own proxy. Open two profiles side by side and the platforms behind them see two unrelated devices in two places.',
          ],
        },
        {
          type: 'diagram',
          variant: 'layers',
          title: 'Inside one antidetect profile',
          nodes: [
            {
              label: 'Browser engine',
              detail: 'Chromium or Firefox runtime tuned for consistent device signals',
            },
            {
              label: 'Fingerprint layer',
              detail: 'Deterministic user agent, canvas, fonts, screen, and hardware values',
            },
            {
              label: 'Profile storage',
              detail: 'Own user-data directory: cookies, cache, extensions, sessions',
            },
            {
              label: 'Proxy exit',
              detail: 'One IP and country per profile, with matching locale and timezone',
            },
            {
              label: 'Sync and API',
              detail: 'Optional Cloud sync, Local API, and CDP automation hooks',
            },
          ],
        },
      ],
    },
    {
      id: 'what-changes',
      title: 'What an antidetect profile changes',
      blocks: [
        {
          type: 'table',
          caption: 'Signals a plain browser shares versus an antidetect profile isolates',
          columns: ['Signal', 'Plain browser profiles', 'Antidetect profile'],
          rows: [
            ['Cookies and site data', 'Shared across the browser', 'Isolated per profile'],
            [
              'Device fingerprint (canvas, fonts, hardware)',
              'Identical in every profile',
              'Configured and stable per profile',
            ],
            [
              'User agent and screen values',
              'The machine’s real values',
              'Set per profile, consistent across runs',
            ],
            ['IP address', 'One shared connection', 'One proxy per profile'],
            [
              'Timezone and locale',
              'Follow the operating system',
              'Matched to the profile’s proxy country',
            ],
            ['Login sessions', 'One login per site', 'One session per profile per site'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Consistency beats exotic settings',
          body: 'Platforms mostly flag change, not strangeness. A profile that keeps the same realistic fingerprint, IP, and locale for months outperforms a flashy configuration that mutates every launch.',
        },
      ],
    },
    {
      id: 'who-uses-them',
      title: 'Who uses antidetect browsers',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Social media agencies running client accounts with per-client profiles and handoffs.',
            'Ecommerce sellers keeping marketplace storefronts technically separate.',
            'Affiliate marketers matching ad identities to each offer’s country.',
            'QA and localization teams testing how sites behave in other countries.',
            'AI-agent developers giving automation persistent, human-looking sessions.',
            'Researchers and investigators operating separate research identities.',
          ],
        },
      ],
    },
    {
      id: 'choosing-one',
      title: 'Choosing an antidetect browser',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'The market splits into closed commercial platforms (AdsPower, GoLogin, Multilogin, Dolphin Anty) with free tiers and per-profile pricing, and open-source options like AliasMode that charge nothing for profiles.',
            'AliasMode is the free, open-source choice: an Apache-2.0 desktop client with unlimited Cloud and Local profiles, a free workspace for team sync, an AdsPower-shaped Local API, and Playwright automation over CDP. Local mode runs without an account and keeps profile data on your machine. The practical trade-off today is platform coverage: a native Windows installer, with macOS from source and no native Linux dashboard.',
          ],
        },
        {
          type: 'links',
          items: [
            {
              href: '/best-antidetect-browsers/',
              label: 'Best antidetect browsers of 2026',
            },
            {
              href: '/best-free-antidetect-browsers/',
              label: 'Best free antidetect browsers',
            },
            {
              href: '/best-open-source-antidetect-browsers/',
              label: 'Best open-source antidetect browsers',
            },
            {
              href: '/download/',
              label: 'Download AliasMode for Windows',
            },
          ],
        },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Legitimate use matters',
      blocks: [
        {
          type: 'callout',
          tone: 'warning',
          title: 'Antidetect browsers are tools, not permission slips',
          body: 'Profile isolation protects accounts from accidental linking. It does not override platform terms, disclosure rules for multiple accounts, or laws on fraud and misrepresentation. Use antidetect browsers for accounts you are authorized to operate.',
        },
      ],
    },
    {
      id: 'faq',
      title: 'Frequently asked questions',
      blocks: [
        {
          type: 'faq',
          items: [
            {
              question: 'Is an antidetect browser legal?',
              answer: 'Yes. The software is legal and widely used by agencies, sellers, and developers. What matters is use: running accounts you are authorized to operate is normal work; impersonation, fraud, and platform-abuse schemes remain illegal and against terms of service.',
            },
            {
              question: 'How is an antidetect browser different from a VPN?',
              answer: 'A VPN changes your IP for everything you do. An antidetect browser changes the device identity per profile and can route each profile through a different proxy. They solve different layers and are often used together.',
            },
            {
              question: 'Do antidetect browsers really work against detection?',
              answer: 'Good ones hold fingerprints stable and realistic, which defeats most device-linking. Strict platforms add behavioral analysis, so pacing, warm-up, and proxy quality still decide outcomes.',
            },
            {
              question: 'What does an antidetect browser cost?',
              answer: 'Commercial tools run free tiers of two to ten profiles with paid plans from roughly $9 to $99 per month. AliasMode is free with unlimited profiles; its only paid product is optional support.',
            },
          ],
        },
      ],
    },
    {
      id: 'sources-and-verification',
      title: 'Sources and verification',
      blocks: [
        {
          type: 'sources',
        },
      ],
    },
  ],
  evidence: [
    {
      id: 'mdn-fingerprinting',
      source: 'MDN Web Docs',
      title: 'Browser fingerprinting glossary entry',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/Fingerprinting',
      checkedOn: '2026-09-01',
    },
    {
      id: 'eff-cover-your-tracks',
      source: 'Electronic Frontier Foundation',
      title: 'Cover Your Tracks fingerprint test',
      url: 'https://coveryourtracks.eff.org/',
      checkedOn: '2026-09-01',
    },
    {
      id: 'aliasmode-github',
      source: 'AliasMode',
      title: 'AliasMode source repository',
      url: 'https://github.com/aliasmode/aliasmode',
      checkedOn: '2026-09-01',
    },
    {
      id: 'aliasmode-download',
      source: 'AliasMode',
      title: 'AliasMode download page',
      url: 'https://aliasmode.com/download/',
      checkedOn: '2026-09-01',
    },
  ],
};
