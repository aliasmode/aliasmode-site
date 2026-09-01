import type { RankingPage } from '../types.ts';

export const bestOpenSourceAntidetectBrowsersRanking: RankingPage = {
  path: '/best-open-source-antidetect-browsers/',
  family: 'ranking',
  variant: 'ranking',
  label: 'Best open-source options',
  title: 'Best Open-Source Antidetect Browsers in 2026',
  description: 'Open-source antidetect options ranked from full Apache-2.0 platforms to code-only patches, with AliasMode the only inspectable GUI platform here.',
  h1: 'The best open-source antidetect browsers in 2026.',
  eyebrow: 'Open-source ranking',
  lead: 'Almost every antidetect platform is a closed binary. This list ranks what you can actually read: AliasMode, scriptable Firefox and Chromium builds, and audited extensions.',
  directAnswer: 'AliasMode is the best open-source antidetect browser in 2026: an Apache-2.0 desktop platform with unlimited free profiles, free Cloud sync, a Local API, and Playwright over CDP. Camoufox leads for code-only Python automation, and Tor Browser remains the reference for anonymity rather than account variety.',
  audience: 'developers',
  intent: 'evaluation',
  intentKey: 'ranking:best-open-source-antidetect-browsers',
  topicCluster: 'rankings',
  parent: '/blog/',
  related: [
    '/best-antidetect-browsers/',
    '/alternatives/open-source-browser-projects/',
    '/docs/playwright/',
    '/security/',
  ],
  primaryCta: {
    href: 'https://github.com/aliasmode/aliasmode',
    label: 'View the source on GitHub',
    type: 'open-source-repository',
  },
  secondaryCta: {
    href: '/download/',
    label: 'Download for Windows',
    type: 'download-installer',
  },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  checkedOn: '2026-09-01',
  methodology: [
    'Fingerprint layer: which engine and device values each profile can change and hold stable over time.',
    'Profile economics: free profile quotas, paid entry prices, and per-seat costs at the checked date.',
    'Automation surface: documented local APIs, CDP attachment, and built-in bot builders.',
    'Teamwork: folders, roles, profile sharing, and synchronized storage.',
    'License depth: what the open license actually covers, from full apps to patches.',
    'Verification: pricing and platform claims checked against official vendor sources on 2026-09-01.',
  ],
  entries: [
    {
      rank: 1,
      name: 'AliasMode',
      path: '/product/',
      summary: 'The only full antidetect platform here released under Apache-2.0, with a public repository and free Cloud sync.',
      bestFor: 'Developers and security-minded teams who need inspectable code plus a real GUI.',
      pricing: 'Free. Unlimited profiles; the desktop code is Apache-2.0.',
      strengths: [
        'Apache-2.0 desktop client with a public repository',
        'Unlimited free profiles and free Cloud sync',
        'Local API on 127.0.0.1:50400 and Playwright over CDP for automation',
        'MCP servers connect Claude Code, Codex, and other clients to profiles',
      ],
      limits: [
        'CloakBrowser, the hardened runtime inside profiles, is a separate licensed binary',
        'Windows installer today; macOS runs from source and Linux needs a remote Windows host',
        'No plugin marketplace or community script store yet',
      ],
    },
    {
      rank: 2,
      name: 'Camoufox',
      summary: 'Open-source anti-detect Firefox build driven entirely from Python code.',
      bestFor: 'Python developers building custom anti-detect automation from code.',
      pricing: 'Free and open source.',
      strengths: [
        'Public code under a real open-source license',
        'Firefox engine diversifies away from overused Chromium bases',
        'Fingerprint injection works with Playwright and Python',
      ],
      limits: [
        'Code-first: no GUI dashboard, profile manager, or team features',
        'You manage proxies, storage, and updates yourself',
        'Not aimed at non-developers',
      ],
      evidenceId: 'camoufox-site',
    },
    {
      rank: 3,
      name: 'undetected-chromedriver',
      summary: 'Open-source Selenium patcher that hides ChromeDriver automation markers.',
      bestFor: 'Teams keeping legacy Selenium scripts alive at zero cost.',
      pricing: 'Free and open source.',
      strengths: [
        'Public code with a large community',
        'Drop-in replacement for existing Selenium scripts',
        'No cost beyond your own hardware',
      ],
      limits: [
        'No profile manager, UI, or fingerprint control beyond defaults',
        'Tracks upstream Chrome releases, so upkeep is constant',
        'Modern server-side checks catch plain patches more often',
      ],
      evidenceId: 'udc-github',
    },
    {
      rank: 4,
      name: 'Patchright',
      summary: 'Patched open-source Playwright build that removes common CDP automation leaks.',
      bestFor: 'Playwright users who need fewer CDP leaks without changing APIs.',
      pricing: 'Free and open source.',
      strengths: [
        'Keeps the Playwright API teams already know',
        'Removes well-known runtime leaks in vanilla Playwright',
        'Active open-source development',
      ],
      limits: [
        'No profile dashboard or fingerprint spoofing',
        'Still a stock browser underneath',
        'Requires code and self-managed profile storage',
      ],
      evidenceId: 'patchright-github',
    },
    {
      rank: 5,
      name: 'Tor Browser',
      summary: 'Open-source anonymity browser that makes every user look identical.',
      bestFor: 'Anonymity research and censorship circumvention, not account farms.',
      pricing: 'Free and open source.',
      strengths: [
        'Strong anonymity through uniform fingerprints',
        'Public, widely audited codebase',
        'Routes around censorship and surveillance',
      ],
      limits: [
        'One shared identity, not many distinct ones',
        'Slow speeds and frequent site blocks',
        'Wrong tool for account-based platform work',
      ],
      evidenceId: 'tor-site',
    },
    {
      rank: 6,
      name: 'Firefox Multi-Account Containers',
      summary: 'Mozilla extension that partitions cookies into separate tab containers.',
      bestFor: 'Light multi-accounting inside desktop Firefox.',
      pricing: 'Free and open source.',
      strengths: [
        'Official Mozilla add-on with open code',
        'Simple cookie separation for light multi-accounting',
        'No spoofing claims to maintain',
      ],
      limits: [
        'Cookies only: user agent, canvas, and fonts stay identical',
        'No proxy-per-container without extra setup',
        'Desktop Firefox only',
      ],
      evidenceId: 'containers-page',
    },
    {
      rank: 7,
      name: 'Brave',
      summary: 'Open-source privacy browser with fingerprint farbling and strong default ad blocking.',
      bestFor: 'Everyday privacy browsing with fingerprint noise.',
      pricing: 'Free and open source.',
      strengths: [
        'Randomized fingerprint noise through farbling',
        'Shields block trackers and ads by default',
        'Chromium-based, so sites behave normally',
      ],
      limits: [
        'Built for privacy, not many distinct identities',
        'Multi-accounting relies on plain browser profiles',
        'No per-profile proxy controls or automation API',
      ],
      evidenceId: 'brave-site',
    },
    {
      rank: 8,
      name: 'DIY Chromium profiles',
      summary: 'Manual per-profile Chromium directories launched with command-line flags.',
      bestFor: 'Engineers who want zero vendor and full manual control.',
      pricing: 'Free; open-source browser components.',
      strengths: [
        'Total control with zero vendor',
        'Scriptable per-profile user-data directories',
        'Works with any automation stack',
      ],
      limits: [
        'Every profile ships the same stock fingerprint',
        'No UI, sync, or team features',
        'Detection research moves faster than DIY patches',
      ],
      evidenceId: 'chromium-udd',
    },
  ],
  sections: [
    {
      id: 'how-we-evaluated',
      title: 'How we evaluated',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'Open code turns trust into a review task. You can check what a client sends over the network, what it writes to disk, and how it builds fingerprints. Closed platforms ask you to take all three on faith.',
          ],
        },
      ],
    },
    {
      id: 'what-open-source-buys-you',
      title: 'What open source buys you here',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'Open source does not mean identical quality. A patched driver solves one leak; a full platform solves storage, sync, teams, and API design together.',
          ],
        },
        {
          type: 'bullets',
          items: [
            'Auditability: network traffic and profile storage you can verify yourself.',
            'License coverage: the desktop app, the browser runtime, and the cloud may differ.',
            'Longevity: code you can fork survives vendor shutdowns.',
            'Automation fit: open tools tend to expose cleaner local APIs and CDP paths.',
          ],
        },
        {
          type: 'links',
          items: [
            {
              href: '/alternatives/open-source-browser-projects/',
              label: 'Open-source browser projects compared',
            },
            {
              href: '/docs/playwright/',
              label: 'Playwright over CDP documentation',
            },
            {
              href: '/security/',
              label: 'AliasMode security architecture',
            },
            {
              href: '/best-antidetect-browsers/',
              label: 'The overall 2026 ranking',
            },
          ],
        },
      ],
    },
    {
      id: 'closed-source-contrast',
      title: 'Why most antidetect browsers stay closed',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'Vendors argue that public fingerprint logic makes spoofing easier to detect. The counterargument is that auditable code is exactly what security teams, agencies handling client data, and donation-funded projects need. AliasMode splits the difference: the desktop client and its API are Apache-2.0, while the CloakBrowser runtime is a separately licensed, hash-pinned binary.',
            'If source availability is a hard requirement, verify what each license actually covers before you commit.',
          ],
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
              question: 'Which antidetect browsers are actually open source?',
              answer: 'AliasMode releases its desktop client under Apache-2.0. Camoufox, undetected-chromedriver, Patchright, and Tor Browser are open-source projects at different layers. AdsPower, GoLogin, Multilogin, and Dolphin Anty are closed source.',
            },
            {
              question: 'Is open source safer for anti-detect work?',
              answer: 'Safer to verify, not automatically safer in outcome. You can confirm what AliasMode sends over the network and where profiles live; with closed tools you trust the vendor. Detection outcomes still depend on fingerprint quality and your workflow discipline.',
            },
            {
              question: 'Does open source mean free?',
              answer: 'In practice yes for this list: every open-source option here costs nothing to run. AliasMode adds free Cloud sync and takes optional paid support as its only revenue.',
            },
            {
              question: 'Can I run AliasMode from source?',
              answer: 'Yes on macOS today, with a supported hash-pinned CloakBrowser binary. Windows has a native installer. Linux has no native dashboard; the documented pattern is driving a Windows AliasMode through Remote MCP.',
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
      id: 'aliasmode-github',
      source: 'AliasMode',
      title: 'AliasMode source repository',
      url: 'https://github.com/aliasmode/aliasmode',
      checkedOn: '2026-09-01',
    },
    {
      id: 'aliasmode-license',
      source: 'AliasMode',
      title: 'AliasMode repository license file',
      url: 'https://github.com/aliasmode/aliasmode/blob/main/LICENSE',
      checkedOn: '2026-09-01',
    },
    {
      id: 'camoufox-site',
      source: 'Camoufox',
      title: 'Camoufox documentation',
      url: 'https://camoufox.com/',
      checkedOn: '2026-09-01',
    },
    {
      id: 'patchright-github',
      source: 'Patchright',
      title: 'Patchright repository',
      url: 'https://github.com/Kaliiiiiiiiii-Virtual-Browser/patchright',
      checkedOn: '2026-09-01',
    },
    {
      id: 'udc-github',
      source: 'undetected-chromedriver',
      title: 'undetected-chromedriver repository',
      url: 'https://github.com/ultrafunkamsterdam/undetected-chromedriver',
      checkedOn: '2026-09-01',
    },
    {
      id: 'tor-site',
      source: 'Tor Project',
      title: 'Tor Browser overview',
      url: 'https://www.torproject.org/',
      checkedOn: '2026-09-01',
    },
  ],
};
