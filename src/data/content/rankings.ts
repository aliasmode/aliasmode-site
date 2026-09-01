import type { RankingPage } from './types';

export const rankingPages: RankingPage[] = [
  {
    path: '/blog/static-residential-proxies-browser-profiles/',
    family: 'ranking',
    variant: 'foundation',
    kind: 'article',
    label: 'Static residential proxies',
    title: 'Static Residential Proxies for Browser Profiles',
    description: 'Compare static residential proxy options for persistent browser profiles using published criteria, dated sources, and fit summaries.',
    h1: 'Static residential proxies for persistent profiles.',
    eyebrow: 'Proxy provider research',
    lead: 'Compare public provider information using the same session, targeting, protocol, commitment, replacement, and pricing criteria.',
    audience: 'agencies',
    intent: 'foundation',
    intentKey: 'ranking:static-residential-proxies-browser-profiles',
    topicCluster: 'research',
    parent: '/blog/',
    related: ['/docs/proxies/', '/guides/static-vs-rotating-proxies/', '/tools/agency-proxy-budget-calculator/'],
    publishedOn: '2026-08-10',
    modifiedOn: '2026-09-01',
    verifiedOn: '2026-08-10',
    checkedOn: '2026-08-10',
    sections: [
      {
        id: 'published-method',
        title: 'Published method',
        blocks: [
          {
            type: 'prose',
            paragraphs: [
              'We record whether a provider offers static or sticky residential sessions, dedicated or shared IPs, location targeting, HTTP/HTTPS/SOCKS5, authentication, bandwidth and concurrency terms, minimum commitment, and replacement policy.',
            ],
          },
        ],
      },
      {
        id: 'how-to-choose',
        title: 'How to choose',
        blocks: [
          {
            type: 'prose',
            paragraphs: [
              'Start with the required country or region, session lifetime, simultaneous profile count, authentication support, and monthly commitment. Calculate cost per usable persistent IP rather than comparing only a headline price.',
            ],
          },
        ],
      },
      {
        id: 'provider-comparison',
        title: 'Provider comparison',
        blocks: [{ type: 'providers' }],
      },
    ],
  },
];
