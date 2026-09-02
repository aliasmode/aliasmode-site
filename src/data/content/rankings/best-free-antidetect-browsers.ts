import type { RankingPage } from '../types.ts';

export const bestFreeAntidetectBrowsersRanking: RankingPage = {
  path: '/best-free-antidetect-browsers/',
  family: 'ranking',
  variant: 'ranking',
  label: 'Best free antidetect browsers',
  title: 'Best Free Antidetect Browsers in 2026: 8 Ranked Picks',
  description: 'The free tiers that matter in 2026, ranked: unlimited AliasMode profiles against capped freemium quotas from AdsPower, GoLogin, and Dolphin Anty.',
  h1: 'The best free antidetect browsers in 2026, ranked.',
  eyebrow: 'Free-first ranking',
  lead: 'Most free antidetect plans cap you at two to ten profiles. AliasMode is the exception: unlimited profiles, free Cloud sync, and no automation paywall.',
  directAnswer: 'AliasMode is the best free antidetect browser in 2026 because free is the product, not a trial: unlimited Cloud and Local profiles, Apache-2.0 source code, and a full Local API. Incogniton and Dolphin Anty lead the capped freemium field with about ten free profiles each.',
  audience: 'evaluators',
  intent: 'evaluation',
  intentKey: 'ranking:best-free-antidetect-browsers',
  topicCluster: 'rankings',
  parent: '/blog/',
  related: [
    '/pricing/',
    '/best-antidetect-browsers/',
    '/best-open-source-antidetect-browsers/',
    '/download/',
  ],
  primaryCta: {
    href: '/download/',
    label: 'Download AliasMode for Windows',
    type: 'download-installer',
  },
  secondaryCta: {
    href: '/alternatives/',
    label: 'Compare all vendors',
    type: 'compare',
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
    'Free-plan honesty: permanent quotas, feature gates, and trial windows that expire.',
    'Verification: pricing and platform claims checked against official vendor sources on 2026-09-01.',
  ],
  entries: [
    {
      rank: 1,
      name: 'AliasMode',
      path: '/pricing/',
      summary: 'Genuinely free: unlimited profiles in Cloud and Local mode, no profile caps, and no paywalled automation.',
      bestFor: 'Anyone who refuses to trade profile count or features for a free plan.',
      pricing: 'Free with unlimited profiles. Optional paid support funds the project.',
      strengths: [
        'Unlimited profiles in Cloud and Local mode with no expiry',
        'Free Cloud sync, Local API, and Playwright CDP without plan gates',
        'Apache-2.0 open-source desktop client you can self-review',
        'No account needed for Local mode',
      ],
      limits: [
        'Windows installer today; macOS runs from source and Linux needs a remote Windows host',
        'Managed Cloud is hosted by the project rather than self-hostable',
        'Support beyond documentation is donation-funded',
      ],
    },
    {
      rank: 2,
      name: 'Incogniton',
      path: '/alternatives/incogniton/',
      summary: 'Lightweight freemium option with bulk profile management and synchronized profile data.',
      bestFor: 'Small teams that need about ten free profiles with bulk creation.',
      pricing: 'Free plan with about ten profiles; paid tiers from $20/mo, checked 2026-09-01.',
      strengths: [
        'Free tier covers small teams',
        'Bulk profile creation and CSV import',
        'Windows and macOS apps with API access on paid plans',
      ],
      limits: [
        'Smaller fingerprint research effort than premium rivals',
        'Closed source',
        'Fewer integrations and ready-made templates',
      ],
      evidenceId: 'incogniton-pricing',
    },
    {
      rank: 3,
      name: 'Dolphin Anty',
      path: '/alternatives/dolphin-anty/',
      summary: 'Team-friendly antidetect browser popular with media buyers and affiliate teams.',
      bestFor: 'Solo media buyers testing workflows before committing to paid tiers.',
      pricing: 'Free plan with about ten profiles; paid tiers from $89/mo, checked 2026-09-01.',
      strengths: [
        'Comfortable free tier for small setups',
        'Automation scenarios aimed at ad platforms',
        'Windows and macOS apps with profile status tracking',
      ],
      limits: [
        'Paid tiers jump steeply after the free quota',
        'Closed source',
        'Desktop app gets resource-hungry on long sessions',
      ],
      evidenceId: 'dolphin-pricing',
    },
    {
      rank: 4,
      name: 'BitBrowser',
      path: '/alternatives/bitbrowser/',
      summary: 'Budget antidetect browser with a generous free quota and local-first profile storage.',
      bestFor: 'Windows users who want the largest free quota with local storage.',
      pricing: 'Free plan with about ten profiles; paid tiers from $15/mo, checked 2026-09-01.',
      strengths: [
        'Low entry price across paid tiers',
        'Windows app with local profile storage',
        'API for basic browser lifecycle automation',
      ],
      limits: [
        'Documentation is thinner and partly Chinese-language',
        'Closed source',
        'Fewer published anti-detect updates than bigger rivals',
      ],
      evidenceId: 'bitbrowser-pricing',
    },
    {
      rank: 5,
      name: 'AdsPower',
      path: '/alternatives/adspower/',
      summary: 'Widely used commercial platform with the de facto standard Local API and built-in RPA automation.',
      bestFor: 'Operators who want RPA tooling and can live with a couple of free profiles.',
      pricing: 'Free plan with a few profiles; paid tiers from $9/mo, checked 2026-09-01.',
      strengths: [
        'AdsPower Local API is the automation shape most tools copy, including AliasMode',
        'Built-in no-code RPA flows for repetitive platform work',
        'Large template and tutorial ecosystem',
      ],
      limits: [
        'Core desktop client is closed source',
        'Free plan keeps only a couple of permanent profiles',
        'Automation beyond the API subset sits behind paid plans',
      ],
      evidenceId: 'adspower-pricing',
    },
    {
      rank: 6,
      name: 'GoLogin',
      path: '/alternatives/gologin/',
      summary: 'Popular freemium antidetect browser with a broad template and automation surface.',
      bestFor: 'Testing one tool across Windows, macOS, and Linux before paying.',
      pricing: 'Free plan with about three profiles; paid tiers from $24/mo, checked 2026-09-01.',
      strengths: [
        'Free plan is enough to evaluate the product properly',
        'Windows, macOS, and Linux support plus a web version',
        'Selenium, Puppeteer, and Playwright automation through an API',
      ],
      limits: [
        'Free profile cap stays tight',
        'Closed source',
        'Desktop app feels heavy during long sessions',
      ],
      evidenceId: 'gologin-pricing',
    },
    {
      rank: 7,
      name: 'MoreLogin',
      path: '/alternatives/morelogin/',
      summary: 'Freemium platform marketed around shared fingerprint environments and a built-in proxy pool.',
      bestFor: 'Trying an integrated proxy marketplace without an upfront plan.',
      pricing: 'Free plan with a couple of profiles; paid tiers from $9/mo, checked 2026-09-01.',
      strengths: [
        'Cheap entry tier for small teams',
        'Aggregated proxy marketplace inside the app',
        'Windows, macOS, and Linux apps',
      ],
      limits: ['Small free quota', 'Closed source', 'Support response times vary'],
      evidenceId: 'morelogin-pricing',
    },
    {
      rank: 8,
      name: 'Nstbrowser',
      path: '/alternatives/nstbrowser/',
      summary: 'Automation-first platform with pay-as-you-go pricing and a CDP-oriented API for scraping and agents.',
      bestFor: 'Light automation under daily free quotas with pay-as-you-go headroom.',
      pricing: 'Free tier with daily quotas plus pay-as-you-go options.',
      strengths: [
        'Strong fit for scraping and agent workloads',
        'Docker and headless deployment options',
        'Pay-as-you-go keeps light use cheap',
      ],
      limits: [
        'Fingerprint depth trails premium rivals on strict platforms',
        'Closed source',
        'Documentation skews to developers rather than operators',
      ],
      evidenceId: 'nstbrowser-pricing',
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
            'Free means different things across this market. Some vendors give away ten permanent profiles; others give two and call the rest a trial. We ranked by how much real work each free tier supports this month, not by marketing copy.',
          ],
        },
      ],
    },
    {
      id: 'what-free-really-means',
      title: 'How we judged the free tiers',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'Watch for automation gates. A free tier that cannot start browsers from an API is a demo, not a tool.',
          ],
        },
        {
          type: 'bullets',
          items: [
            'Permanent quota: does the free profile count survive renewal, or shrink after the first month?',
            'Automation access: is the local API, CDP attachment, or bot builder usable on the free plan?',
            'Team features: sharing and roles usually hide behind the first paid tier.',
            'Export freedom: can you take profiles with you when you outgrow the plan?',
          ],
        },
        {
          type: 'links',
          items: [
            {
              href: '/pricing/',
              label: 'What AliasMode includes for free',
            },
            {
              href: '/best-antidetect-browsers/',
              label: 'The overall 2026 ranking',
            },
            {
              href: '/integrations/import/',
              label: 'Import profiles from another tool',
            },
            {
              href: '/guides/manage-multiple-social-media-accounts-safely/',
              label: 'Run several accounts safely',
            },
          ],
        },
      ],
    },
    {
      id: 'when-to-pay',
      title: 'When a free plan is not enough',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'Free tiers break in three places: team seats, automation volume, and support. If you hand profiles to teammates, run scheduled bot flows, or need someone to answer when a platform flags your accounts, budget for a paid tier or choose a tool where those features are simply free.',
            'AliasMode sits in the second group: Cloud roles, the Local API, and CDP automation are all free, with paid support as the only paid product.',
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
              question: 'Which antidetect browser is really free?',
              answer: 'AliasMode: unlimited profiles in Cloud and Local mode, free sync, free Local API, and no expiring quota. Incogniton and Dolphin Anty offer the most usable capped free tiers at about ten profiles each.',
            },
            {
              question: 'Is AliasMode actually free, or free with limits?',
              answer: 'The product is free with unlimited profiles. Paid service exists for support only; every profile, sync, and automation feature ships free under an Apache-2.0 desktop client.',
            },
            {
              question: 'Do free antidetect plans expire?',
              answer: 'Most freemium quotas are permanent but tiny, typically two to ten profiles. Trial-based plans expire completely. AliasMode has no trial: the free tier is the product.',
            },
            {
              question: 'What can I realistically run on a free plan?',
              answer: 'A handful of low-risk accounts with manual work. Profile caps, automation gates, and single-seat limits make free tiers a proving ground. Plan to migrate before client work depends on the tool.',
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
      id: 'incogniton-pricing',
      source: 'Incogniton',
      title: 'Incogniton pricing page',
      url: 'https://incogniton.com/pricing/',
      checkedOn: '2026-09-01',
    },
    {
      id: 'dolphin-pricing',
      source: 'Dolphin Anty',
      title: 'Dolphin Anty pricing page',
      url: 'https://anty.dolphin.ru.com/en/prices/',
      checkedOn: '2026-09-01',
    },
    {
      id: 'bitbrowser-pricing',
      source: 'BitBrowser',
      title: 'BitBrowser product and pricing information',
      url: 'https://www.bitbrowser.cn/',
      checkedOn: '2026-09-01',
    },
    {
      id: 'adspower-pricing',
      source: 'AdsPower',
      title: 'AdsPower pricing page',
      url: 'https://www.adspower.com/pricing',
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
