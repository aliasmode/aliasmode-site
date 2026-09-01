import { contentKind, contentLinks, contentPages, getContentPage, sectionIds } from './content-index';
import type { IndexPolicy, PageFamily, RouteKind, SocialFamily } from './content/types';
import { analyticsGroupFor, canonicalPath } from './paths';

export type { RouteKind } from './content/types';
export { canonicalPath } from './paths';

export interface SiteRoute {
  path: string;
  label: string;
  title: string;
  description: string;
  kind: RouteKind;
  parent?: string;
  related?: string[];
  indexPolicy: IndexPolicy;
  publishedOn: string;
  modifiedOn: string;
  family?: PageFamily;
  socialFamily: SocialFamily;
  /** Privacy-safe page identity shared by pageview and CTA events. */
  analyticsGroup: string;
}

type StaticRoute = Omit<SiteRoute, 'indexPolicy' | 'socialFamily' | 'analyticsGroup'> & { indexPolicy?: IndexPolicy; socialFamily?: SocialFamily };

/** Pages that keep their own `.astro` template rather than a content-family record. */
const staticRoutes: StaticRoute[] = [
  {
    path: '/',
    label: 'Home',
    title: 'Free Open-Source Antidetect Browser',
    description: 'AliasMode is a free, open-source antidetect browser for multiple accounts, teams, and AI agents. Unlimited profiles, Cloud sync, Local mode, Local API, and MCP.',
    kind: 'home',
    related: ['/product/', '/download/', '/best-antidetect-browsers/', '/alternatives/'],
    publishedOn: '2026-08-10',
    modifiedOn: '2026-09-01',
    socialFamily: 'home',
  },
  {
    path: '/local-vs-cloud/',
    label: 'Local vs Cloud',
    title: 'AliasMode Local vs Cloud',
    description: 'Compare account-free Local browser profiles with free Cloud synchronization and team collaboration in AliasMode.',
    kind: 'product',
    related: ['/local/', '/cloud/', '/pricing/'],
    publishedOn: '2026-08-10',
    modifiedOn: '2026-08-26',
  },
  {
    path: '/download/',
    label: 'Download',
    title: 'Download AliasMode for Windows',
    description: 'Download the AliasMode Windows beta, verify its SHA-256 checksum, install CloakBrowser, and choose Cloud or Local mode.',
    kind: 'product',
    related: ['/docs/getting-started/', '/docs/cloakbrowser/', '/docs/macos/'],
    publishedOn: '2026-08-10',
    modifiedOn: '2026-09-01',
  },
  {
    path: '/pricing/',
    label: 'Pricing',
    title: 'Free Antidetect Browser Pricing',
    description: 'AliasMode Cloud and Local are free with unlimited browser profiles. AliasMode is a non-profit project supported by optional donations.',
    kind: 'product',
    related: ['/cloud/', '/local/', '/best-free-antidetect-browsers/'],
    publishedOn: '2026-08-10',
    modifiedOn: '2026-08-26',
  },
  {
    path: '/security/',
    label: 'Security',
    title: 'AliasMode Security Architecture',
    description: 'Review AliasMode profile isolation, Cloud synchronization controls, Local data boundaries, device revocation, and reporting contacts.',
    kind: 'product',
    related: ['/product/', '/local/', '/cloud/'],
    publishedOn: '2026-08-10',
    modifiedOn: '2026-08-20',
  },
  {
    path: '/contact/',
    label: 'Contact',
    title: 'Contact and Donations',
    description: 'Contact AliasMode for product help, feedback, optional donations, or responsible security reporting.',
    kind: 'product',
    related: ['/pricing/', '/docs/troubleshooting/', '/security/'],
    publishedOn: '2026-08-10',
    modifiedOn: '2026-08-20',
  },
  {
    path: '/sitemap/',
    label: 'Site directory',
    title: 'AliasMode Site Directory',
    description: 'Browse every AliasMode page: product, documentation, MCP and API references, integrations, comparisons, rankings, guides, and use cases.',
    kind: 'company',
    publishedOn: '2026-09-01',
    modifiedOn: '2026-09-01',
  },
  { path: '/terms/', label: 'Terms', title: 'Terms of Service', description: 'Read the current AliasMode Terms of Service and the version that applies to your use of the service.', kind: 'legal', related: ['/privacy/', '/acceptable-use/'], publishedOn: '2026-08-10', modifiedOn: '2026-08-12' },
  { path: '/privacy/', label: 'Privacy', title: 'Privacy Policy', description: 'Read the current AliasMode Privacy Policy for the website, desktop application, and managed Cloud service.', kind: 'legal', related: ['/terms/', '/acceptable-use/'], publishedOn: '2026-08-10', modifiedOn: '2026-08-26' },
  { path: '/acceptable-use/', label: 'Acceptable Use', title: 'Acceptable Use Policy', description: 'Read the current AliasMode Acceptable Use Policy for authorized browser-profile and automation workflows.', kind: 'legal', related: ['/terms/', '/privacy/'], publishedOn: '2026-08-10', modifiedOn: '2026-08-12' },
  { path: '/terms/v2/', label: 'Terms v2', title: 'Terms of Service v2', description: 'Version 2 of the AliasMode Terms of Service, effective August 12, 2026.', kind: 'legal', parent: '/terms/', indexPolicy: 'archive', publishedOn: '2026-08-12', modifiedOn: '2026-08-12' },
  { path: '/privacy/v2/', label: 'Privacy v2', title: 'Privacy Policy v2', description: 'Version 2 of the AliasMode Privacy Policy, effective August 12, 2026.', kind: 'legal', parent: '/privacy/', indexPolicy: 'archive', publishedOn: '2026-08-12', modifiedOn: '2026-08-12' },
  { path: '/privacy/v3/', label: 'Privacy v3', title: 'Privacy Policy v3', description: 'Version 3 of the AliasMode Privacy Policy, effective August 26, 2026.', kind: 'legal', parent: '/privacy/', indexPolicy: 'archive', publishedOn: '2026-08-26', modifiedOn: '2026-08-26' },
  { path: '/acceptable-use/v2/', label: 'Acceptable Use v2', title: 'Acceptable Use Policy v2', description: 'Version 2 of the AliasMode Acceptable Use Policy, effective August 12, 2026.', kind: 'legal', parent: '/acceptable-use/', indexPolicy: 'archive', publishedOn: '2026-08-12', modifiedOn: '2026-08-12' },
];

const socialFor = (kind: RouteKind, family?: PageFamily): SocialFamily => family ?? (kind === 'home' ? 'home' : 'hub');

const fail = (message: string): never => {
  throw new Error(`routes: ${message}`);
};

export const siteRoutes: SiteRoute[] = [
  ...staticRoutes.map((route) => ({
    ...route,
    path: canonicalPath(route.path),
    indexPolicy: route.indexPolicy ?? 'index',
    socialFamily: route.socialFamily ?? socialFor(route.kind),
    analyticsGroup: analyticsGroupFor(route.path),
  })),
  ...contentPages.map((page): SiteRoute => ({
    path: page.path,
    label: page.label,
    title: page.title,
    description: page.description,
    kind: contentKind(page),
    parent: page.parent,
    related: page.related,
    indexPolicy: page.indexPolicy ?? 'index',
    publishedOn: page.publishedOn,
    modifiedOn: page.modifiedOn,
    family: page.family,
    socialFamily: page.socialFamily ?? socialFor(contentKind(page), page.family),
    analyticsGroup: analyticsGroupFor(page.path),
  })),
];

const routeMap = new Map<string, SiteRoute>();
const titleOwners = new Map<string, string>();
const descriptionOwners = new Map<string, string>();
for (const route of siteRoutes) {
  if (routeMap.has(route.path)) fail(`${route.path} is registered twice`);
  routeMap.set(route.path, route);
  const title = route.title.toLowerCase();
  const description = route.description.toLowerCase();
  if (titleOwners.has(title)) fail(`${route.path} repeats the title of ${titleOwners.get(title)}`);
  if (descriptionOwners.has(description)) fail(`${route.path} repeats the description of ${descriptionOwners.get(description)}`);
  titleOwners.set(title, route.path);
  descriptionOwners.set(description, route.path);
}

/** Resolve a registered route or throw. Missing references are build errors, never silently dropped. */
export const requireSiteRoute = (path: string, from = 'registry') => {
  const route = routeMap.get(canonicalPath(path));
  if (!route) fail(`${from} references unregistered route ${path}`);
  return route;
};

export const getSiteRoute = (path: string) => routeMap.get(canonicalPath(path));

export const getBreadcrumbs = (route: SiteRoute) => {
  const paths: SiteRoute[] = [];
  const seen = new Set<string>();
  let current: SiteRoute | undefined = route;
  while (current) {
    if (seen.has(current.path)) fail(`${route.path} has a parent cycle through ${current.path}`);
    seen.add(current.path);
    paths.unshift(current);
    current = current.parent ? requireSiteRoute(current.parent, `${current.path} parent`) : undefined;
  }
  if (paths[0]?.path !== '/') paths.unshift(requireSiteRoute('/'));
  return paths;
};

for (const route of siteRoutes) {
  getBreadcrumbs(route);
  for (const related of route.related ?? []) {
    if (canonicalPath(related) === route.path) fail(`${route.path} relates to itself`);
    requireSiteRoute(related, `${route.path} related`);
  }
}
for (const page of contentPages) {
  for (const child of page.children ?? []) {
    const childRoute = requireSiteRoute(child, `${page.path} children`);
    if (childRoute.parent !== page.path) fail(`${page.path} lists child ${child} whose parent is ${childRoute.parent ?? 'unset'}`);
  }
  for (const href of contentLinks(page)) {
    const [target, fragment] = href.split('#');
    const route = requireSiteRoute(target, `${page.path} link`);
    if (fragment) {
      const targetPage = getContentPage(route.path);
      if (!targetPage) fail(`${page.path} links to fragment #${fragment} on static page ${target}`);
      if (!sectionIds(targetPage).includes(fragment)) fail(`${page.path} links to missing fragment #${fragment} on ${target}`);
    }
  }
}

export const indexableRoutes = siteRoutes.filter((route) => route.indexPolicy === 'index');

export const routesByKind = (kind: RouteKind) => indexableRoutes.filter((route) => route.kind === kind);
