/**
 * Typed content model for every generated SEO page.
 *
 * One record = one canonical URL. Six page families share `PageBase`; each
 * family adds only the fields its layout renders. `content-index.ts` validates
 * every record at build time and projects the route registry from it.
 */

export type PageFamily = 'comparison' | 'ranking' | 'task-guide' | 'docs' | 'integration' | 'hub';

/** Route kind drives schema defaults, hub-card labels, and analytics grouping. */
export type RouteKind =
  | 'home'
  | 'product'
  | 'company'
  | 'documentation'
  | 'comparison'
  | 'ranking'
  | 'integration'
  | 'use-case'
  | 'guide'
  | 'tool'
  | 'article'
  | 'legal';

/**
 * index   -> index,follow, self-canonical, sitemap, llms.txt, schema, analytics
 * archive -> noindex,follow, no canonical, no sitemap, no analytics (frozen legal versions)
 * private -> noindex,nofollow, no canonical, no schema, no analytics
 */
export type IndexPolicy = 'index' | 'archive' | 'private';

export type Audience = 'operators' | 'agencies' | 'developers' | 'agents' | 'evaluators' | 'general';

export type SearchIntent = 'evaluation' | 'procedural' | 'reference' | 'navigational' | 'foundation';

export type SocialFamily = 'home' | PageFamily;

/** Qualified conversion CTA types. The first six are the primary KPI events. */
export type CtaType =
  | 'download-installer'
  | 'download-release-asset'
  | 'open-source-repository'
  | 'configure-local-mcp'
  | 'configure-remote-mcp'
  | 'start-macos-source-run'
  | 'view-local-api-reference'
  | 'compare'
  | 'guide'
  | 'docs'
  | 'contact'
  | 'xreacher';

export interface Cta {
  href: string;
  label: string;
  type: CtaType;
}

export interface Link {
  href: string;
  label: string;
}

export interface Fact {
  value: string;
  label: string;
}

/**
 * Internal evidence record. `url` is kept for research and monthly refresh
 * work only; layouts render `source`, `title`, and `checkedOn` as plain text
 * and never emit `url` into HTML or JSON-LD.
 */
export interface Evidence {
  id: string;
  source: string;
  title: string;
  url: string;
  checkedOn: string;
}

export interface Step {
  title: string;
  body: string;
  code?: string;
}

export type Block =
  | { type: 'prose'; paragraphs: string[] }
  | { type: 'bullets'; items: string[] }
  | { type: 'numbered'; items: string[] }
  | { type: 'steps'; items: Step[] }
  | { type: 'table'; caption?: string; columns: string[]; rows: string[][] }
  | { type: 'code'; language?: string; title?: string; code: string }
  | { type: 'callout'; tone: 'note' | 'tip' | 'warning'; title?: string; body: string }
  | { type: 'links'; items: Link[] }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'diagram'; variant: 'flow' | 'layers'; title?: string; nodes: { label: string; detail?: string }[] }
  | { type: 'mockup'; variant: 'profiles' | 'team' | 'terminal'; title?: string; rows: { label: string; meta: string; state?: string }[] }
  | { type: 'detection' }
  | { type: 'calculator' }
  | { type: 'providers' }
  | { type: 'openapi' }
  | { type: 'mcp-catalog' }
  | { type: 'sources' };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface PageBase {
  path: string;
  family: PageFamily;
  /** Override the family's default route kind (for example a landing hub that is a `use-case`). */
  kind?: RouteKind;
  label: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  /** Answer-first opening shown directly under the hero. */
  directAnswer?: string;
  audience: Audience;
  intent: SearchIntent;
  /** Globally unique search-intent owner, e.g. `alternative:adspower`. */
  intentKey: string;
  /** Non-unique cluster used for contextual linking, e.g. `social-accounts`. */
  topicCluster: string;
  parent?: string;
  related: string[];
  children?: string[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  indexPolicy?: IndexPolicy;
  publishedOn: string;
  modifiedOn: string;
  verifiedOn?: string;
  socialFamily?: SocialFamily;
  facts?: Fact[];
  sections: Section[];
  evidence?: Evidence[];
}

export interface ComparisonRow {
  criterion: string;
  aliasMode: string;
  competitor: string;
  evidenceId?: string;
}

export interface VendorSummary {
  name: string;
  slug: string;
  region?: string;
}

export interface EcosystemProduct {
  name: string;
  summary: string;
  bestFor: string;
  license?: string;
  pricing?: string;
  evidenceId?: string;
}

export interface ComparisonPage extends PageBase {
  family: 'comparison';
  variant: 'vendor' | 'ecosystem';
  vendor?: VendorSummary;
  checkedOn: string;
  rows?: ComparisonRow[];
  aliasModeFits?: string[];
  competitorFits?: string[];
  migration?: string[];
  products?: EcosystemProduct[];
}

export interface RankingEntry {
  rank: number;
  name: string;
  path?: string;
  summary: string;
  bestFor: string;
  pricing: string;
  strengths: string[];
  limits: string[];
  evidenceId?: string;
}

export interface RankingPage extends PageBase {
  family: 'ranking';
  variant: 'ranking' | 'foundation';
  checkedOn?: string;
  methodology?: string[];
  entries?: RankingEntry[];
  matrix?: { columns: string[]; rows: string[][] };
}

export interface TaskGuidePage extends PageBase {
  family: 'task-guide';
  outcome: string;
  prerequisites: string[];
  steps: Step[];
  verification: string[];
  cautions?: string[];
  aliasModeWorkflow: Step[];
}

export interface DocsPage extends PageBase {
  family: 'docs';
  requirements?: string[];
  versionNote?: string;
  testedOn?: string;
}

export type IntegrationTransport = 'local-stdio' | 'remote-oauth' | 'remote-bearer' | 'local-api' | 'cdp';

export interface IntegrationPage extends PageBase {
  family: 'integration';
  client: string;
  transports: IntegrationTransport[];
  platforms: string[];
  setup: Step[];
  verification: string[];
  troubleshooting: { symptom: string; fix: string }[];
  testedOn?: string;
}

export interface HubGroup {
  title: string;
  description?: string;
  paths: string[];
}

export interface AudiencePath {
  audience: string;
  description: string;
  href: string;
}

export interface HubPage extends PageBase {
  family: 'hub';
  /** `directory` lists child collections; `landing` is a product or audience landing page. */
  variant: 'directory' | 'landing';
  groups?: HubGroup[];
  audiencePaths?: AudiencePath[];
}

export type ContentPage = ComparisonPage | RankingPage | TaskGuidePage | DocsPage | IntegrationPage | HubPage;

export const familyKind: Record<PageFamily, RouteKind> = {
  comparison: 'comparison',
  ranking: 'ranking',
  'task-guide': 'guide',
  docs: 'documentation',
  integration: 'integration',
  hub: 'product',
};

export const isoDate = /^\d{4}-\d{2}-\d{2}$/;
