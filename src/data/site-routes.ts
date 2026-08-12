export type RouteKind = 'home' | 'product' | 'company' | 'documentation' | 'comparison' | 'integration' | 'use-case' | 'guide' | 'tool' | 'article' | 'legal';

export interface SiteRoute {
  path: string;
  label: string;
  title: string;
  description: string;
  kind: RouteKind;
  parent?: string;
  related?: string[];
  sitemap?: boolean;
}

export const canonicalPath = (path: string) => {
  const clean = `/${path.split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, '')}`;
  return clean === '/' ? '/' : `${clean}/`;
};

export const siteRoutes: SiteRoute[] = [
  {
    path: '/',
    label: 'Home',
    title: 'Free Open-Source Antidetect Browser',
    description: 'Manage multiple accounts with free, open-source browser profiles. Use AliasMode Cloud for sync and teamwork or Local without an account.',
    kind: 'home',
    related: ['/product/', '/download/', '/agencies/', '/alternatives/'],
  },
  {
    path: '/product/',
    label: 'Product',
    title: 'Antidetect Browser Profile Manager',
    description: 'Explore AliasMode browser profiles, proxy support, Local and Cloud modes, team collaboration, and Playwright browser automation.',
    kind: 'product',
    related: ['/local/', '/cloud/', '/docs/', '/integrations/'],
  },
  {
    path: '/about/',
    label: 'About',
    title: 'About AliasMode and Xreacher',
    description: 'Learn how the Xreacher team developed AliasMode, used it internally for months, and released it as a free, open-source browser profile manager.',
    kind: 'company',
    related: ['/product/', '/use-cases/outreach-agencies/', '/contact/'],
  },
  {
    path: '/local/',
    label: 'Local',
    title: 'Local Antidetect Browser Without an Account',
    description: 'Run unlimited AliasMode browser profiles on one computer without an AliasMode account or AliasMode Cloud connection.',
    kind: 'product',
    related: ['/cloud/', '/local-vs-cloud/', '/docs/getting-started/'],
  },
  {
    path: '/cloud/',
    label: 'Cloud',
    title: 'Free Cloud Browser Profile Sync for Teams',
    description: 'Synchronize portable browser profiles, invite workspace members, revoke devices, and coordinate profile access with AliasMode Cloud.',
    kind: 'product',
    related: ['/local/', '/local-vs-cloud/', '/agencies/'],
  },
  {
    path: '/local-vs-cloud/',
    label: 'Local vs Cloud',
    title: 'AliasMode Local vs Cloud',
    description: 'Compare account-free Local browser profiles with free Cloud synchronization and team collaboration in AliasMode.',
    kind: 'product',
    related: ['/local/', '/cloud/', '/pricing/'],
  },
  {
    path: '/download/',
    label: 'Download',
    title: 'Download AliasMode for Windows',
    description: 'Download the AliasMode Windows beta, verify its SHA-256 checksum, install CloakBrowser, and choose Cloud or Local mode.',
    kind: 'product',
    related: ['/docs/getting-started/', '/docs/cloakbrowser/', '/security/'],
  },
  {
    path: '/pricing/',
    label: 'Pricing',
    title: 'Free Antidetect Browser Pricing',
    description: 'AliasMode Cloud and Local are free with unlimited browser profiles. AliasMode is a non-profit project supported by optional donations.',
    kind: 'product',
    related: ['/cloud/', '/local/', '/contact/'],
  },
  {
    path: '/agencies/',
    label: 'Agencies',
    title: 'Browser Profiles for Agencies',
    description: 'Organize browser profiles, proxies, client sessions, team access, handoffs, and offboarding for authorized agency account work.',
    kind: 'use-case',
    related: ['/use-cases/social-media-agencies/', '/guides/organize-client-browser-profiles/', '/tools/agency-proxy-budget-calculator/'],
  },
  {
    path: '/security/',
    label: 'Security',
    title: 'AliasMode Security Architecture',
    description: 'Review AliasMode profile isolation, Cloud synchronization controls, Local data boundaries, device revocation, and reporting contacts.',
    kind: 'product',
    related: ['/product/', '/local/', '/cloud/'],
  },
  {
    path: '/contact/',
    label: 'Contact',
    title: 'Contact and Donations',
    description: 'Contact AliasMode for product help, feedback, optional donations, or responsible security reporting.',
    kind: 'product',
    related: ['/pricing/', '/docs/troubleshooting/', '/security/'],
  },
  {
    path: '/docs/',
    label: 'Documentation',
    title: 'AliasMode Documentation',
    description: 'Install AliasMode, create browser profiles, configure proxies, use the Local API, connect Playwright, and troubleshoot common issues.',
    kind: 'documentation',
    related: ['/docs/getting-started/', '/docs/browser-profiles/', '/docs/local-api/'],
  },
  {
    path: '/docs/getting-started/',
    label: 'Getting started',
    title: 'Get Started with AliasMode on Windows',
    description: 'Install AliasMode and CloakBrowser, choose Cloud or Local mode, create a browser profile, and open your first isolated session.',
    kind: 'documentation',
    parent: '/docs/',
    related: ['/download/', '/docs/cloakbrowser/', '/docs/browser-profiles/'],
  },
  {
    path: '/docs/browser-profiles/',
    label: 'Browser profiles',
    title: 'AliasMode Browser Profiles',
    description: 'Learn how AliasMode keeps cookies, storage, proxy settings, user agents, screen values, extensions, tags, and profile data separated.',
    kind: 'documentation',
    parent: '/docs/',
    related: ['/docs/proxies/', '/guides/organize-client-browser-profiles/', '/security/'],
  },
  {
    path: '/docs/proxies/',
    label: 'Proxies',
    title: 'Configure HTTP, HTTPS, and SOCKS5 Proxies',
    description: 'Add HTTP, HTTPS, or SOCKS5 proxies to AliasMode profiles, import credentials, run preflight checks, and verify the exit location.',
    kind: 'documentation',
    parent: '/docs/',
    related: ['/guides/one-proxy-per-browser-profile/', '/guides/static-vs-rotating-proxies/', '/tools/agency-proxy-budget-calculator/'],
  },
  {
    path: '/docs/local-api/',
    label: 'Local API',
    title: 'AliasMode Local API Reference',
    description: 'Use the AdsPower-compatible local API subset for browser control, profiles, groups, cookies, cache, and CDP automation.',
    kind: 'documentation',
    parent: '/docs/',
    related: ['/integrations/adspower-api/', '/docs/playwright/', '/docs/troubleshooting/'],
  },
  {
    path: '/docs/playwright/',
    label: 'Playwright',
    title: 'Connect Playwright to AliasMode with CDP',
    description: 'Start an AliasMode profile through the Local API and attach Playwright to its persistent browser session over CDP.',
    kind: 'documentation',
    parent: '/docs/',
    related: ['/integrations/playwright/', '/docs/local-api/', '/docs/browser-profiles/'],
  },
  {
    path: '/docs/cloakbrowser/',
    label: 'CloakBrowser',
    title: 'Install CloakBrowser for AliasMode',
    description: 'Install the separately licensed CloakBrowser runtime that AliasMode uses to open persistent browser profiles on Windows.',
    kind: 'documentation',
    parent: '/docs/',
    related: ['/docs/getting-started/', '/download/', '/product/'],
  },
  {
    path: '/docs/troubleshooting/',
    label: 'Troubleshooting',
    title: 'AliasMode Troubleshooting',
    description: 'Fix common AliasMode installation, CloakBrowser, proxy, Local API, profile-opening, and Cloud synchronization problems.',
    kind: 'documentation',
    parent: '/docs/',
    related: ['/docs/getting-started/', '/docs/proxies/', '/contact/'],
  },
  {
    path: '/alternatives/',
    label: 'Alternatives',
    title: 'Antidetect Browser Alternatives',
    description: 'Compare AliasMode with AdsPower, GoLogin, Multilogin, and Dolphin Anty by price, source availability, Local use, teams, and automation.',
    kind: 'comparison',
    related: ['/alternatives/adspower/', '/alternatives/gologin/', '/alternatives/multilogin/'],
  },
  {
    path: '/alternatives/adspower/',
    label: 'AdsPower alternative',
    title: 'Free Open-Source AdsPower Alternative',
    description: 'Compare AliasMode and AdsPower for browser profiles, Local use, Cloud teamwork, pricing, source availability, and API migration.',
    kind: 'comparison',
    parent: '/alternatives/',
    related: ['/integrations/adspower-api/', '/docs/local-api/', '/pricing/'],
  },
  {
    path: '/alternatives/gologin/',
    label: 'GoLogin alternative',
    title: 'Free Open-Source GoLogin Alternative',
    description: 'Compare AliasMode and GoLogin for free browser profiles, open-source desktop code, Local work, Cloud sync, proxies, and automation.',
    kind: 'comparison',
    parent: '/alternatives/',
    related: ['/product/', '/pricing/', '/integrations/playwright/'],
  },
  {
    path: '/alternatives/multilogin/',
    label: 'Multilogin alternative',
    title: 'Free Open-Source Multilogin Alternative',
    description: 'Compare AliasMode and Multilogin for browser profiles, team workflows, Local mode, pricing, source code, proxy setup, and automation.',
    kind: 'comparison',
    parent: '/alternatives/',
    related: ['/product/', '/agencies/', '/pricing/'],
  },
  {
    path: '/alternatives/dolphin-anty/',
    label: 'Dolphin Anty alternative',
    title: 'Free Open-Source Dolphin Anty Alternative',
    description: 'Compare AliasMode and Dolphin Anty for unlimited free browser profiles, Local use, Cloud teams, open-source code, and API workflows.',
    kind: 'comparison',
    parent: '/alternatives/',
    related: ['/product/', '/pricing/', '/docs/local-api/'],
  },
  {
    path: '/integrations/',
    label: 'Integrations',
    title: 'AliasMode Browser Automation Integrations',
    description: 'Connect AliasMode browser profiles to an AdsPower-compatible local API subset and Playwright automation over CDP.',
    kind: 'integration',
    related: ['/integrations/adspower-api/', '/integrations/playwright/', '/docs/local-api/'],
  },
  {
    path: '/integrations/adspower-api/',
    label: 'AdsPower API',
    title: 'AdsPower-Compatible Local API Integration',
    description: 'Move supported profile, group, browser-control, cookie, cache, and CDP workflows to the AliasMode Local API subset.',
    kind: 'integration',
    parent: '/integrations/',
    related: ['/docs/local-api/', '/alternatives/adspower/', '/integrations/playwright/'],
  },
  {
    path: '/integrations/playwright/',
    label: 'Playwright',
    title: 'Playwright Browser Profile Automation',
    description: 'Automate persistent AliasMode browser profiles by starting them through the Local API and connecting Playwright over CDP.',
    kind: 'integration',
    parent: '/integrations/',
    related: ['/docs/playwright/', '/docs/local-api/', '/docs/browser-profiles/'],
  },
  {
    path: '/use-cases/',
    label: 'Use cases',
    title: 'AliasMode Agency Use Cases',
    description: 'Choose browser-profile workflows for social media agencies, outreach agencies, client handoffs, team access, and proxy planning.',
    kind: 'use-case',
    related: ['/use-cases/social-media-agencies/', '/use-cases/outreach-agencies/', '/agencies/'],
  },
  {
    path: '/use-cases/social-media-agencies/',
    label: 'Social media agencies',
    title: 'Browser Profiles for Social Media Agencies',
    description: 'Separate authorized client social sessions, assign proxies, organize ownership, invite teammates, and hand profiles between operators.',
    kind: 'use-case',
    parent: '/use-cases/',
    related: ['/agencies/', '/guides/organize-client-browser-profiles/', '/docs/proxies/'],
  },
  {
    path: '/use-cases/outreach-agencies/',
    label: 'Outreach agencies',
    title: 'Browser Profiles for Outreach Agencies',
    description: 'Organize authorized outreach accounts, client profiles, proxies, team handoffs, and optional Xreacher campaign workflows.',
    kind: 'use-case',
    parent: '/use-cases/',
    related: ['/agencies/', '/guides/organize-client-browser-profiles/', '/tools/agency-proxy-budget-calculator/'],
  },
  {
    path: '/guides/',
    label: 'Guides',
    title: 'AliasMode Browser Profile Guides',
    description: 'Plan proxy assignments, choose static or rotating sessions, and organize client browser profiles for repeatable agency work.',
    kind: 'guide',
    related: ['/guides/one-proxy-per-browser-profile/', '/guides/static-vs-rotating-proxies/', '/guides/organize-client-browser-profiles/'],
  },
  {
    path: '/guides/one-proxy-per-browser-profile/',
    label: 'One proxy per profile',
    title: 'One Proxy per Browser Profile',
    description: 'Map persistent browser profiles to stable proxy sessions, document ownership, verify exit locations, and plan replacement workflows.',
    kind: 'guide',
    parent: '/guides/',
    related: ['/docs/proxies/', '/guides/static-vs-rotating-proxies/', '/tools/agency-proxy-budget-calculator/'],
  },
  {
    path: '/guides/static-vs-rotating-proxies/',
    label: 'Static vs rotating proxies',
    title: 'Static vs Rotating Proxies for Browser Profiles',
    description: 'Choose static, sticky rotating, or per-request rotating proxy sessions for persistent accounts, research, and automation workflows.',
    kind: 'guide',
    parent: '/guides/',
    related: ['/docs/proxies/', '/guides/one-proxy-per-browser-profile/', '/blog/static-residential-proxies-browser-profiles/'],
  },
  {
    path: '/guides/organize-client-browser-profiles/',
    label: 'Organize client profiles',
    title: 'Organize Client Browser Profiles',
    description: 'Create a consistent naming, grouping, proxy, ownership, handoff, and offboarding system for client browser profiles.',
    kind: 'guide',
    parent: '/guides/',
    related: ['/agencies/', '/use-cases/social-media-agencies/', '/docs/browser-profiles/'],
  },
  {
    path: '/tools/',
    label: 'Tools',
    title: 'Free Browser Profile Planning Tools',
    description: 'Use free AliasMode planning tools to estimate agency proxy counts and monthly proxy costs for browser-profile operations.',
    kind: 'tool',
    related: ['/tools/agency-proxy-budget-calculator/', '/docs/proxies/', '/agencies/'],
  },
  {
    path: '/tools/agency-proxy-budget-calculator/',
    label: 'Proxy budget calculator',
    title: 'Agency Proxy Budget Calculator',
    description: 'Estimate how many proxies your browser profiles need and calculate the monthly proxy budget for an agency workflow.',
    kind: 'tool',
    parent: '/tools/',
    related: ['/agencies/', '/docs/proxies/', '/guides/one-proxy-per-browser-profile/'],
  },
  {
    path: '/blog/',
    label: 'Research',
    title: 'AliasMode Browser Profile Research',
    description: 'Read maintained AliasMode research about proxy selection, browser-profile workflows, automation, and agency account operations.',
    kind: 'article',
    related: ['/blog/static-residential-proxies-browser-profiles/', '/guides/', '/docs/'],
  },
  {
    path: '/blog/static-residential-proxies-browser-profiles/',
    label: 'Static residential proxies',
    title: 'Static Residential Proxies for Browser Profiles',
    description: 'Compare static residential proxy options for persistent browser profiles using published criteria, dated sources, and fit summaries.',
    kind: 'article',
    parent: '/blog/',
    related: ['/docs/proxies/', '/guides/static-vs-rotating-proxies/', '/tools/agency-proxy-budget-calculator/'],
  },
  {
    path: '/terms/', label: 'Terms', title: 'Terms of Service', description: 'Read the current AliasMode Terms of Service and the version that applies to your use of the service.', kind: 'legal', related: ['/privacy/', '/acceptable-use/'],
  },
  {
    path: '/privacy/', label: 'Privacy', title: 'Privacy Policy', description: 'Read the current AliasMode Privacy Policy for the website, desktop application, and managed Cloud service.', kind: 'legal', related: ['/terms/', '/acceptable-use/'],
  },
  {
    path: '/acceptable-use/', label: 'Acceptable Use', title: 'Acceptable Use Policy', description: 'Read the current AliasMode Acceptable Use Policy for authorized browser-profile and automation workflows.', kind: 'legal', related: ['/terms/', '/privacy/'],
  },
  {
    path: '/terms/v2/', label: 'Terms v2', title: 'Terms of Service v2', description: 'Version 2 of the AliasMode Terms of Service, effective August 12, 2026.', kind: 'legal', parent: '/terms/', sitemap: false,
  },
  {
    path: '/privacy/v2/', label: 'Privacy v2', title: 'Privacy Policy v2', description: 'Version 2 of the AliasMode Privacy Policy, effective August 12, 2026.', kind: 'legal', parent: '/privacy/', sitemap: false,
  },
  {
    path: '/acceptable-use/v2/', label: 'Acceptable Use v2', title: 'Acceptable Use Policy v2', description: 'Version 2 of the AliasMode Acceptable Use Policy, effective August 12, 2026.', kind: 'legal', parent: '/acceptable-use/', sitemap: false,
  },
].map((route) => ({ ...route, path: canonicalPath(route.path) }));

const routeMap = new Map(siteRoutes.map((route) => [route.path, route]));

export const getSiteRoute = (path: string) => routeMap.get(canonicalPath(path));

export const getBreadcrumbs = (route: SiteRoute) => {
  const paths: SiteRoute[] = [];
  let current: SiteRoute | undefined = route;
  while (current) {
    paths.unshift(current);
    current = current.parent ? routeMap.get(canonicalPath(current.parent)) : undefined;
  }
  if (paths[0]?.path !== '/') paths.unshift(routeMap.get('/')!);
  return paths;
};

export const indexableRoutes = siteRoutes.filter((route) => route.sitemap !== false);
