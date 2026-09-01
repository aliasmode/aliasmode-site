import type { RankingPage } from '../types.ts';

export const browserFingerprintingGuideRanking: RankingPage = {
  path: '/browser-fingerprinting-guide/',
  family: 'ranking',
  variant: 'foundation',
  kind: 'article',
  label: 'Browser fingerprinting guide',
  title: 'Browser Fingerprinting Guide: Signals and Defenses',
  description: 'How websites fingerprint browsers: the signals collected, how detection systems judge consistency, and how persistent profiles build identities that hold up.',
  h1: 'Browser fingerprinting: how it works and how profiles help.',
  eyebrow: 'Foundation guide',
  lead: 'Your browser leaks a dozen stable signals to every site: canvas rendering, fonts, screen values, hardware counts. Fingerprinting turns them into an ID that survives cookies being cleared.',
  directAnswer: 'Browser fingerprinting identifies users through device signals instead of cookies: user agent, canvas and WebGL output, fonts, screen parameters, timezone, and hardware counts. Persistent profiles defeat it by giving each account a fixed, realistic set of those signals plus a matching proxy. AliasMode does this free with deterministic fingerprint seeds per profile.',
  audience: 'operators',
  intent: 'foundation',
  intentKey: 'foundation:browser-fingerprinting-guide',
  topicCluster: 'foundation',
  parent: '/blog/',
  related: [
    '/what-is-an-antidetect-browser/',
    '/docs/cloakbrowser/',
    '/security/',
    '/best-antidetect-browsers/',
  ],
  primaryCta: {
    href: '/download/',
    label: 'Download AliasMode for Windows',
    type: 'download-installer',
  },
  secondaryCta: {
    href: '/docs/browser-profiles/',
    label: 'How profiles work',
    type: 'docs',
  },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  sections: [
    {
      id: 'what-gets-collected',
      title: 'What a fingerprint collects',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'Fingerprinting needs no special permission. Pages read the rendering engine’s behavior and the environment’s configuration through ordinary browser APIs, then combine the readings into a stable identifier.',
          ],
        },
        {
          type: 'table',
          caption: 'Common fingerprint signals',
          columns: ['Signal', 'Example reading', 'Why platforms collect it'],
          rows: [
            ['User agent', 'Browser and OS version strings', 'Cheap first-pass grouping'],
            [
              'Canvas and WebGL',
              'Pixel-level rendering differences',
              'Ties browser builds to GPUs',
            ],
            ['Fonts', 'Installed font list', 'Strong OS and install-history signal'],
            [
              'Screen and media',
              'Resolution, color depth, device pixel ratio',
              'Distinguishes real machines from VM defaults',
            ],
            [
              'Hardware',
              'CPU core count, memory, battery state',
              'Hard to fake consistently',
            ],
            [
              'Timezone and locale',
              'GMT offset, language, currency format',
              'Must match the IP’s country',
            ],
            [
              'WebRTC',
              'Local and public IP candidates',
              'Leaks the real address behind proxies when mishandled',
            ],
          ],
        },
      ],
    },
    {
      id: 'how-detection-works',
      title: 'How detection actually judges you',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Consistency: does the fingerprint match yesterday’s? Randomized fingerprints that change every launch look worse than a stable one.',
            'Coherence: do the signals agree? A Windows user agent with macOS fonts or a US IP with a GMT+7 clock is a flag.',
            'Automation markers: headless flags, driver artifacts, and CDP leaks betray bots regardless of fingerprint.',
            'Reputation: datacenter IP ranges and previously abused configurations carry history.',
            'Behavior: typing rhythm, mouse paths, and pacing separate humans from scripts even with perfect fingerprints.',
          ],
        },
        {
          type: 'prose',
          paragraphs: [
            'The lesson from detection research is that platforms rarely block on one signal. They score consistency over time, which is why persistent profiles with deterministic values outperform both stock browsers and randomized spoofing.',
          ],
        },
      ],
    },
    {
      id: 'defenses',
      title: 'Defenses that hold up',
      blocks: [
        {
          type: 'numbered',
          items: [
            'Use a browser runtime built for fingerprint control rather than a stock browser with extensions.',
            'Give every account its own profile with a deterministic fingerprint seed that never changes between runs.',
            'Match timezone, locale, and language to the profile’s proxy country.',
            'Keep one stable exit IP per profile for the account’s lifetime.',
            'Warm new identities with human-paced activity before any automation.',
            'Test before real work: check for leaks and consistency with public fingerprint-reading tools.',
          ],
        },
      ],
    },
    {
      id: 'test-your-setup',
      title: 'Test your setup',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Read the raw fingerprint',
              body: 'Open a fingerprint-checking site in the profile and note the reported user agent, canvas hash, fonts, screen values, and hardware counts.',
            },
            {
              title: 'Restart and compare',
              body: 'Close the profile, reopen it, and re-read the values. Every value should be identical; drift means the configuration is not deterministic.',
            },
            {
              title: 'Check the network story',
              body: 'Confirm the reported IP, timezone, language, and currency all point to the same country as the profile’s proxy.',
            },
            {
              title: 'Verify automation leaks',
              body: 'Run your Playwright or Puppeteer script against the check site and look for automation markers that the manual visit did not show.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'AliasMode profiles are deterministic by design',
          body: 'Each AliasMode profile stores a fingerprint seed plus user agent, screen parameters, proxy, and locale, so restarts reproduce the same identity. The CloakBrowser runtime handles engine-level consistency, and the docs cover proxy preflight checks before you log anything in.',
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
              question: 'Can a fingerprint be changed?',
              answer: 'Yes, per application: antidetect browsers override the values pages can read and keep them fixed per profile. You cannot fully block collection in a stock browser without breaking sites.',
            },
            {
              question: 'Does clearing cookies beat fingerprinting?',
              answer: 'No. Cookies are the easy identifier; the fingerprint regenerates the same ID from device signals immediately. That is why real defenses operate at the browser layer.',
            },
            {
              question: 'Is fingerprinting worse on mobile?',
              answer: 'Mobile browsers expose fewer readable signals, but their fingerprints are also more uniform, which makes outliers stand out. Both platforms punish inconsistency hardest.',
            },
            {
              question: 'How does AliasMode stop fingerprint drift?',
              answer: 'Profiles store a deterministic seed plus explicit user agent, screen, proxy, and locale settings. Every run of a profile reports the same identity, and the CloakBrowser runtime keeps engine-level values coherent.',
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
      id: 'aliasmode-cloakbrowser-docs',
      source: 'AliasMode',
      title: 'AliasMode CloakBrowser documentation',
      url: 'https://aliasmode.com/docs/cloakbrowser/',
      checkedOn: '2026-09-01',
    },
    {
      id: 'aliasmode-profiles-docs',
      source: 'AliasMode',
      title: 'AliasMode browser profiles documentation',
      url: 'https://aliasmode.com/docs/browser-profiles/',
      checkedOn: '2026-09-01',
    },
  ],
};
