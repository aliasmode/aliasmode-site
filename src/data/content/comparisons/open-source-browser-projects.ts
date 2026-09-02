import type { ComparisonPage } from '../types.ts';

export const openSourceBrowserProjectsComparison: ComparisonPage = {
  path: '/alternatives/open-source-browser-projects/',
  family: 'comparison',
  variant: 'ecosystem',
  label: 'Open-source browser projects',
  title: 'Open-Source Browser Projects for Multi-Account Work',
  description: 'Tour the open-source browser privacy landscape and see where AliasMode fits as a free profile manager for multi-account work.',
  h1: 'Open-Source Browser Projects for Multi-Account Work: The 2026 Landscape',
  eyebrow: 'Open-source landscape',
  lead: 'Open-source browser projects solve private browsing at the engine level. AliasMode solves the other half of the problem: organizing many persistent, proxied account profiles under one free, Apache-2.0 desktop client.',
  directAnswer: 'This landscape suits developers and operators who want inspectable code. Use the privacy browsers for private browsing, and use AliasMode when the job is managing many persistent account profiles with proxies, cookies, and API automation in one open-source client.',
  audience: 'evaluators',
  intent: 'foundation',
  intentKey: 'ecosystem:open-source-browser-projects',
  topicCluster: 'comparisons',
  parent: '/alternatives/',
  related: ['/best-open-source-antidetect-browsers/', '/alternatives/', '/best-antidetect-browsers-for-ai-agents/', '/docs/browser-profiles/'],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  facts: [
    { value: 'Apache-2.0', label: 'Desktop client license' },
    { value: 'Unlimited', label: 'Free profiles, Local and Cloud' },
    { value: 'Local + Cloud', label: 'Both free' },
  ],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  checkedOn: '2026-09-01',
  evidence: [
    { id: 'camoufox-repo', source: 'Camoufox', title: 'Camoufox official repository', url: 'https://github.com/daijro/camoufox', checkedOn: '2026-09-01' },
    { id: 'donut-browser-site', source: 'Donut Browser', title: 'Donut Browser official website', url: 'https://donutbrowser.com/', checkedOn: '2026-09-01' },
    { id: 'mullvad-browser', source: 'Mullvad VPN', title: 'Mullvad Browser project page', url: 'https://mullvad.net/browser', checkedOn: '2026-09-01' },
    { id: 'librewolf-site', source: 'LibreWolf', title: 'LibreWolf official website', url: 'https://librewolf.net/', checkedOn: '2026-09-01' },
    { id: 'tor-browser', source: 'The Tor Project', title: 'Tor Browser project page', url: 'https://www.torproject.org/', checkedOn: '2026-09-01' },
    { id: 'ungoogled-chromium-repo', source: 'ungoogled-chromium', title: 'ungoogled-chromium official repository', url: 'https://github.com/ungoogled-software/ungoogled-chromium', checkedOn: '2026-09-01' },
  ],
  products: [
    {
      name: 'AliasMode',
      summary: 'Free, Apache-2.0 desktop profile manager with unlimited profiles, per-profile proxies and fingerprint seeds, account-free Local mode, and an AdsPower-shaped Local API.',
      bestFor: 'Operators who need managed, persistent account profiles, not just a private browser window.',
      license: 'Apache-2.0 (desktop client)',
      pricing: 'Free for Local and Cloud; paid service is support only.',
    },
    {
      name: 'Camoufox',
      summary: 'Hardened Firefox fork with engine-level fingerprint spoofing, driven from a Python API rather than a dashboard.',
      bestFor: 'Python developers who want to script anti-detect browsing sessions directly.',
      license: 'Open source (Firefox fork)',
      pricing: 'Free, open-source project.',
      evidenceId: 'camoufox-repo',
    },
    {
      name: 'Donut Browser',
      summary: 'Open-source, native macOS app that launches and organizes browser profiles across several engines from one menu bar application.',
      bestFor: 'Mac users who want a local, code-inspectable launcher for many profiles.',
      license: 'Open source',
      pricing: 'Free, open-source project.',
      evidenceId: 'donut-browser-site',
    },
    {
      name: 'Mullvad Browser',
      summary: 'Privacy browser co-developed with the Tor Project that makes every user blend into one shared fingerprint.',
      bestFor: 'Private browsing where all sessions look identical, which is the opposite of distinct account identities.',
      license: 'Open source (Firefox base)',
      pricing: 'Free, open-source project.',
      evidenceId: 'mullvad-browser',
    },
    {
      name: 'LibreWolf',
      summary: 'Hardened Firefox fork with telemetry removed and strict privacy defaults for daily browsing.',
      bestFor: 'Privacy-conscious daily browsing with a familiar Firefox workflow.',
      license: 'Open source (Firefox base)',
      pricing: 'Free, open-source project.',
      evidenceId: 'librewolf-site',
    },
    {
      name: 'Tor Browser',
      summary: 'Anonymity browser that routes traffic through the Tor network with anti-fingerprinting defenses.',
      bestFor: 'Anonymity against network observers, not running many separate accounts.',
      license: 'Open source (Firefox base)',
      pricing: 'Free, open-source project.',
      evidenceId: 'tor-browser',
    },
    {
      name: 'ungoogled-chromium',
      summary: 'Chromium rebuilt without Google services and background requests, intended as a base for custom builds.',
      bestFor: 'Teams that assemble their own hardened Chromium builds and tooling.',
      license: 'Open source (Chromium base)',
      pricing: 'Free, open-source project.',
      evidenceId: 'ungoogled-chromium-repo',
    },
  ],
  sections: [
    {
      id: 'how-the-pieces-fit',
      title: 'How the pieces fit',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'Open-source browser projects divide into two groups. Privacy browsers such as Mullvad Browser, LibreWolf, and Tor Browser harden one browsing session against tracking. Engine projects such as Camoufox and ungoogled-chromium change the browser itself. Neither group manages identities: they do not store per-account proxies, keep separate cookie jars, or orchestrate dozens of parallel profiles.',
            'AliasMode covers the management layer. Each profile is a persistent user-data directory with its own proxy and credentials, user agent and screen parameters, deterministic fingerprint seed, cookies, groups, and tags. Profiles are unlimited and free in both Local mode and Cloud, the desktop client is Apache-2.0, and Local mode needs no AliasMode account.',
          ],
        },
        {
          type: 'table',
          caption: 'What each project gives a multi-account operator',
          columns: ['Project', 'Strength', 'Gap for multi-account work'],
          rows: [
            ['AliasMode', 'Profile manager: proxies, cookies, fingerprint seeds, groups, Local API', 'Ships a supported browser binary rather than a hardened Firefox fork'],
            ['Camoufox', 'Engine-level fingerprint spoofing in Firefox', 'No profile dashboard; you script storage, proxies, and orchestration yourself'],
            ['Donut Browser', 'Native macOS profile launcher', 'macOS only; no Windows installer or Cloud sync'],
            ['Mullvad Browser', 'Shared privacy fingerprint for private browsing', 'Deliberately prevents looking like distinct people'],
            ['LibreWolf', 'Hardened daily Firefox', 'One shared profile state; no per-account isolation tooling'],
            ['Tor Browser', 'Network-level anonymity', 'Slow circuits and one identity stream; wrong tool for account farms'],
            ['ungoogled-chromium', 'Clean Chromium base', 'A starting point, not a finished product or account workflow'],
          ],
        },
      ],
    },
    {
      id: 'aliasmode-role',
      title: 'AliasMode as the profile-management workhorse',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'The honest division of labor: engine and privacy projects change how a browser looks or behaves, while AliasMode decides which identity runs, where it connects, and what it keeps between sessions. Because the client is open source, an operator can audit how profiles, proxies, and fingerprint seeds are stored instead of trusting a closed binary.',
            'Automation is first-class. The Local API on 127.0.0.1:50400 follows the AdsPower route shape, so existing AdsPower-style scripts map onto it, and Playwright attaches to a started profile over CDP. Local MCP lets coding agents such as Claude Code and Codex drive profiles directly from a terminal.',
          ],
        },
        {
          type: 'links',
          items: [
            { href: '/best-open-source-antidetect-browsers/', label: 'Ranking of open-source antidetect browsers' },
            { href: '/docs/local-api/', label: 'AliasMode Local API reference' },
            { href: '/docs/playwright/', label: 'Connect Playwright over CDP' },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Pair, do not replace',
          body: 'Nothing here conflicts with Camoufox-style engine work or ungoogled-chromium builds. AliasMode handles identity storage and orchestration; engine projects remain useful where a custom browser base is a hard requirement.',
        },
      ],
    },
    {
      id: 'faq',
      title: 'FAQ',
      blocks: [
        {
          type: 'faq',
          items: [
            {
              question: 'Is an open-source browser enough to manage multiple accounts?',
              answer: 'Not by itself. A privacy browser protects one session stream from tracking. Multi-account work needs separate persistent profiles, a proxy per identity, and a way to reopen yesterday\'s login state, which is profile-manager territory.',
            },
            {
              question: 'How does AliasMode relate to Camoufox-style projects?',
              answer: 'Camoufox modifies a Firefox engine to spoof fingerprints and is driven from Python. AliasMode ships its own supported browser binary and adds the surrounding profile system: proxies, cookies, groups, Cloud sync, and a Local API for automation.',
            },
            {
              question: 'Can these open-source browsers be automated?',
              answer: 'Most Chromium and Firefox builds expose CDP or WebDriver, so automation is possible. AliasMode adds profile orchestration around the browser: start and stop per profile through the Local API, attach Playwright over CDP, and keep cookies in the profile between runs.',
            },
            {
              question: 'What does any of this cost?',
              answer: 'The projects listed here are free and open source. AliasMode is also free: unlimited profiles in Local mode and Cloud, an Apache-2.0 desktop client, and no account required for Local use. Paid service covers support only.',
            },
          ],
        },
      ],
    },
    { id: 'sources-and-verification', title: 'Sources and verification', blocks: [{ type: 'sources' }] },
  ],
};

