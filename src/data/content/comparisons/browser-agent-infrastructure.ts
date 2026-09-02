import type { ComparisonPage } from '../types.ts';

export const browserAgentInfrastructureComparison: ComparisonPage = {
  path: '/alternatives/browser-agent-infrastructure/',
  family: 'comparison',
  variant: 'ecosystem',
  label: 'Browser agent infrastructure',
  title: 'Browser Agent Infrastructure: Cloud Services vs. Local Profiles',
  description: 'Compare Browserbase, Steel.dev, and Browserless with AliasMode local MCP profiles for authenticated agent work at no infrastructure cost.',
  h1: 'Browser Agent Infrastructure for AI Agents: The 2026 Landscape',
  eyebrow: 'Agent infrastructure landscape',
  lead: 'Cloud browser platforms rent you ephemeral sessions by the minute. AliasMode runs the same automation loop on your own machine: persistent local profiles, a local MCP server, and Playwright over CDP — free, with logins that stay on your disk.',
  directAnswer: 'Cloud infrastructure suits teams that need elastic, disposable sessions and unblocking at metered cost. AliasMode is the right pick when agents work with your own authenticated accounts, must reuse login state between runs, and should stay on your hardware without per-session fees.',
  audience: 'evaluators',
  intent: 'foundation',
  intentKey: 'ecosystem:browser-agent-infrastructure',
  topicCluster: 'comparisons',
  parent: '/alternatives/',
  related: ['/best-antidetect-browsers-for-ai-agents/', '/guides/persistent-browser-profiles-for-ai-agents/', '/docs/mcp/', '/integrations/playwright/'],
  primaryCta: { href: '/docs/mcp/', label: 'Configure the local MCP server', type: 'configure-local-mcp' },
  facts: [
    { value: 'Local MCP', label: 'Stdio server on your machine' },
    { value: '$0 per session', label: 'Local runs, free Local and Cloud' },
    { value: 'CDP', label: 'Playwright attachment per profile' },
  ],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  checkedOn: '2026-09-01',
  evidence: [
    { id: 'browserbase-site', source: 'Browserbase', title: 'Browserbase product website', url: 'https://www.browserbase.com/', checkedOn: '2026-09-01' },
    { id: 'steel-site', source: 'Steel.dev', title: 'Steel.dev product website', url: 'https://steel.dev/', checkedOn: '2026-09-01' },
    { id: 'browserless-site', source: 'Browserless', title: 'Browserless product website', url: 'https://www.browserless.io/', checkedOn: '2026-09-01' },
    { id: 'brightdata-scraping-browser', source: 'Bright Data', title: 'Bright Data Scraping Browser product page', url: 'https://brightdata.com/products/scraping-browser', checkedOn: '2026-09-01' },
    { id: 'hyperbrowser-site', source: 'Hyperbrowser', title: 'Hyperbrowser product website', url: 'https://hyperbrowser.ai/', checkedOn: '2026-09-01' },
    { id: 'browser-use-repo', source: 'Browser Use', title: 'Browser Use official repository', url: 'https://github.com/browser-use/browser-use', checkedOn: '2026-09-01' },
  ],
  products: [
    {
      name: 'Browserbase',
      summary: 'Managed cloud browser platform with session APIs, proxy and stealth options, and observability for production agent fleets.',
      bestFor: 'Teams that need elastic, disposable cloud sessions without operating browsers.',
      license: 'Proprietary (SDKs are open source)',
      pricing: 'Usage-based plans with a free tier.',
      evidenceId: 'browserbase-site',
    },
    {
      name: 'Steel.dev',
      summary: 'Browser API built for AI agents, with a public codebase and a managed cloud service for session control, proxies, and stealth.',
      bestFor: 'Agent teams that want self-hostable components plus a hosted option.',
      license: 'Public repository with a managed cloud',
      pricing: 'Usage-based cloud plans.',
      evidenceId: 'steel-site',
    },
    {
      name: 'Browserless',
      summary: 'Cloud browser infrastructure exposing Chrome through CDP, Puppeteer, and Playwright endpoints for large-scale automation.',
      bestFor: 'Scraping and automation workloads that fit a per-usage cloud model.',
      license: 'Proprietary service',
      pricing: 'Subscription and usage-based plans.',
      evidenceId: 'browserless-site',
    },
    {
      name: 'Bright Data Scraping Browser',
      summary: 'Fully managed unblocking browser served through the Bright Data proxy network, aimed at harvesting public data at scale.',
      bestFor: 'Large-scale public-page collection where unblocking is the hard part.',
      license: 'Proprietary service',
      pricing: 'Pay-as-you-go on the Bright Data network.',
      evidenceId: 'brightdata-scraping-browser',
    },
    {
      name: 'Hyperbrowser',
      summary: 'Cloud browser platform aimed at agent workloads such as web agents and computer-use tasks.',
      bestFor: 'Developers prototyping agents against hosted sessions.',
      license: 'Proprietary service',
      pricing: 'Usage-based plans.',
      evidenceId: 'hyperbrowser-site',
    },
    {
      name: 'Browser Use',
      summary: 'Open-source framework that gives LLM agents a browser to drive, running against any Playwright-compatible browser on your machine.',
      bestFor: 'Self-hosted agent loops that pair naturally with local profiles over CDP.',
      license: 'Open source',
      pricing: 'Free, open-source framework.',
      evidenceId: 'browser-use-repo',
    },
  ],
  sections: [
    {
      id: 'cloud-versus-local',
      title: 'Cloud sessions versus local profiles',
      blocks: [
        {
          type: 'prose',
          paragraphs: [
            'Cloud browser infrastructure sells elasticity: spin up hundreds of isolated sessions, attach Puppeteer or Playwright, pay per minute, and let the provider handle unblocking and proxies. The trade is that your automation runs on vendor hardware. Session storage is ephemeral by design, so authenticated state has to be re-injected every run, and long-lived account logins sit on someone else\'s servers.',
            'AliasMode inverts the model. Profiles are persistent user-data directories on your Windows machine, each with its own proxy, fingerprint seed, and cookies. The agent connects through a local stdio MCP server or the loopback Local API on 127.0.0.1:50400, starts a profile, and attaches Playwright over CDP. Cookies stay in the profile, so tomorrow\'s run opens already logged in.',
          ],
        },
        {
          type: 'table',
          caption: 'The same agent loop, two operating models',
          columns: ['Dimension', 'Cloud platforms', 'AliasMode local'],
          rows: [
            ['Where sessions run', 'Provider datacenters', 'Your Windows machine, over loopback'],
            ['Session cost model', 'Per-minute or per-GB usage billing', 'Free — unlimited profiles, Local and Cloud'],
            ['Login persistence', 'Ephemeral by default; state re-injection', 'Cookies and storage persist inside each profile'],
            ['Authenticated account work', 'Possible, but logins leave your infrastructure', 'Logins never leave the machine in Local mode'],
            ['Fingerprint and proxy control', 'Provider stealth and proxy add-ons', 'Per-profile proxy, user agent, screen parameters, seed'],
            ['Best fit', 'Elastic scraping and burst capacity', 'Ongoing agents on your own accounts'],
          ],
        },
      ],
    },
    {
      id: 'connect-an-agent-locally',
      title: 'Connect an agent to local profiles',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Create one profile per identity', body: 'Give each profile its proxy and credentials, user agent, and deterministic fingerprint seed, then log the account in once so cookies persist.' },
            { title: 'Expose the local MCP server', body: 'AliasMode ships a local stdio MCP server; point Claude Code, Codex, OpenClaw, or Hermes at it and the agent can list, start, and stop profiles.' },
            { title: 'Attach Playwright over CDP', body: 'Start the profile through the Local API on 127.0.0.1:50400 and connect Playwright to the returned CDP URL for page-level work.' },
            { title: 'Reuse state between runs', body: 'Stop the profile when the agent finishes; the next run reopens the same user-data directory with its login state, cookies, and proxy intact.' },
          ],
        },
        {
          type: 'links',
          items: [
            { href: '/docs/mcp/', label: 'Local MCP documentation' },
            { href: '/docs/local-api/', label: 'Local API reference' },
            { href: '/integrations/playwright/', label: 'Playwright integration' },
            { href: '/guides/persistent-browser-profiles-for-ai-agents/', label: 'Guide: persistent profiles for AI agents' },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Use both, on purpose',
          body: 'The models are complementary. Keep authenticated, long-lived account agents on local AliasMode profiles, and burst public-page scraping to a cloud provider when capacity, not identity, is the constraint.',
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
              question: 'When is a cloud browser platform worth paying for?',
              answer: 'When you need hundreds of concurrent disposable sessions, provider-grade unblocking, or capacity beyond one machine. For agents operating a handful of your own authenticated accounts, local profiles remove the per-session bill entirely.',
            },
            {
              question: 'Do cloud platforms keep my logins between sessions?',
              answer: 'Generally not — cloud sessions are designed to be ephemeral, so authenticated state must be re-injected per run. AliasMode profiles are persistent by default: cookies and storage stay in the profile until you delete them.',
            },
            {
              question: 'Which agent clients work with AliasMode?',
              answer: 'The local stdio MCP server works with MCP clients such as Claude Code, Codex, OpenClaw, and Hermes, and a Remote MCP host supports bearer-capable clients like Claude.ai and ChatGPT. Anything that speaks Playwright can attach over CDP.',
            },
            {
              question: 'What hardware does the local model need?',
              answer: 'One Windows machine running the AliasMode desktop client; each profile is a browser instance it starts and stops. Parallelism is bounded by the machine\'s resources, which is the honest limit local profiles trade for zero session fees.',
            },
          ],
        },
      ],
    },
    { id: 'sources-and-verification', title: 'Sources and verification', blocks: [{ type: 'sources' }] },
  ],
};

