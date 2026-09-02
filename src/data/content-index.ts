import { comparisonPages } from './content/comparisons/index.ts';
import { docsPages } from './content/docs/index.ts';
import { hubPages } from './content/hubs.ts';
import { integrationPages } from './content/integrations/index.ts';
import { rankingPages } from './content/rankings/index.ts';
import { taskGuidePages } from './content/task-guides/index.ts';
import { canonicalPath } from './paths.ts';
import { familyKind, isoDate, type Block, type ContentPage, type PageFamily, type RouteKind } from './content/types.ts';

const fail = (message: string): never => {
  throw new Error(`content: ${message}`);
};

/** Every generated page, in family order. Validated below before export. */
export const contentPages: ContentPage[] = [
  ...hubPages,
  ...docsPages,
  ...integrationPages,
  ...comparisonPages,
  ...rankingPages,
  ...taskGuidePages,
];

const byPath = new Map<string, ContentPage>();
const unique = (field: string, seen: Map<string, string>, value: string, path: string) => {
  const key = value.trim().toLowerCase();
  if (!key) fail(`${path} has an empty ${field}`);
  const owner = seen.get(key);
  if (owner) fail(`${path} repeats ${field} "${value}" already used by ${owner}`);
  seen.set(key, path);
};

const titles = new Map<string, string>();
const descriptions = new Map<string, string>();
const headings = new Map<string, string>();
const intentKeys = new Map<string, string>();

for (const page of contentPages) {
  if (page.path !== canonicalPath(page.path)) fail(`${page.path} is not a canonical lowercase trailing-slash path`);
  if (page.path !== page.path.toLowerCase()) fail(`${page.path} must be lowercase`);
  if (byPath.has(page.path)) fail(`${page.path} is defined twice`);
  byPath.set(page.path, page);
  unique('title', titles, page.title, page.path);
  unique('description', descriptions, page.description, page.path);
  unique('h1', headings, page.h1, page.path);
  unique('intentKey', intentKeys, page.intentKey, page.path);
  if (page.title.length > 70) fail(`${page.path} title is longer than 70 characters`);
  if (page.description.length < 70 || page.description.length > 175) fail(`${page.path} description must be 70-175 characters`);
  for (const [field, value] of [['publishedOn', page.publishedOn], ['modifiedOn', page.modifiedOn], ['verifiedOn', page.verifiedOn]] as const) {
    if (value !== undefined && !isoDate.test(value)) fail(`${page.path} ${field} must be an ISO date`);
  }
  if (page.modifiedOn < page.publishedOn) fail(`${page.path} modifiedOn precedes publishedOn`);
  if (!page.sections.length && page.family !== 'hub') fail(`${page.path} has no sections`);
  const sectionIds = new Set<string>();
  for (const section of page.sections) {
    if (!/^[a-z0-9-]+$/.test(section.id)) fail(`${page.path} section id "${section.id}" must be kebab-case`);
    if (sectionIds.has(section.id)) fail(`${page.path} repeats section id ${section.id}`);
    sectionIds.add(section.id);
    if (!section.blocks.length) fail(`${page.path} section ${section.id} is empty`);
  }
  if (page.family === 'comparison') {
    if (!isoDate.test(page.checkedOn)) fail(`${page.path} checkedOn must be an ISO date`);
    if (page.variant === 'vendor') {
      if (!page.vendor) fail(`${page.path} needs a vendor`);
      const rows = page.rows;
      const fits = [page.aliasModeFits, page.competitorFits, page.migration];
      if (!rows?.length || fits.some((list) => !list?.length)) fail(`${page.path} needs rows, fits, and migration steps`);
      for (const row of rows!) if (row.evidenceId && !page.evidence?.some((item) => item.id === row.evidenceId)) fail(`${page.path} row "${row.criterion}" cites unknown evidence ${row.evidenceId}`);
    } else if (!page.products?.length) fail(`${page.path} ecosystem page needs products`);
  }
  if (page.family === 'ranking' && page.variant === 'ranking') {
    const entries = page.entries;
    if (!entries?.length || !page.methodology?.length) fail(`${page.path} needs ranked entries and a methodology`);
    if (entries![0].name !== 'AliasMode' || entries![0].rank !== 1) fail(`${page.path} must rank AliasMode first`);
    entries!.forEach((entry, index) => { if (entry.rank !== index + 1) fail(`${page.path} entry ${entry.name} has rank ${entry.rank}, expected ${index + 1}`); });
    if (!page.checkedOn) fail(`${page.path} ranking needs checkedOn`);
  }
  if (page.family === 'task-guide' && (!page.steps.length || !page.prerequisites.length || !page.verification.length || !page.aliasModeWorkflow.length)) fail(`${page.path} task guide needs prerequisites, steps, verification, and an AliasMode workflow`);
  if (page.family === 'integration' && (!page.setup.length || !page.transports.length || !page.verification.length)) fail(`${page.path} integration needs transports, setup, and verification`);
  if (page.family === 'hub' && page.variant === 'directory' && !page.groups?.length) fail(`${page.path} directory hub needs groups`);
  for (const item of page.evidence ?? []) {
    if (!isoDate.test(item.checkedOn)) fail(`${page.path} evidence ${item.id} checkedOn must be an ISO date`);
    if (!/^https?:\/\//.test(item.url)) fail(`${page.path} evidence ${item.id} needs an absolute source URL`);
  }
}

export const getContentPage = (path: string) => byPath.get(canonicalPath(path));

export const contentKind = (page: ContentPage): RouteKind => page.kind ?? familyKind[page.family];

/** Internal hrefs referenced by a page's blocks, CTAs, and ranking entries. Used by the registry integrity check. */
export const contentLinks = (page: ContentPage): string[] => {
  const links: string[] = [];
  const fromBlock = (block: Block) => {
    if (block.type === 'links') links.push(...block.items.map((item) => item.href));
  };
  for (const section of page.sections) section.blocks.forEach(fromBlock);
  if (page.primaryCta) links.push(page.primaryCta.href);
  if (page.secondaryCta) links.push(page.secondaryCta.href);
  if (page.family === 'ranking') for (const entry of page.entries ?? []) if (entry.path) links.push(entry.path);
  if (page.family === 'hub') {
    for (const group of page.groups ?? []) links.push(...group.paths);
    for (const item of page.audiencePaths ?? []) links.push(item.href);
  }
  return links.filter((href) => href.startsWith('/'));
};

export const sectionIds = (page: ContentPage) => page.sections.map((section) => section.id);

export const pagesByFamily = (family: PageFamily) => contentPages.filter((page) => page.family === family);
