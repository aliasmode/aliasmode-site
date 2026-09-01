import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config.mjs';
import { indexableRoutes } from '../data/site-routes';
import type { RouteKind } from '../data/site-routes';

const groups: [RouteKind[], string][] = [
  [['home', 'product', 'company'], 'Product'],
  [['documentation'], 'Documentation and references'],
  [['integration'], 'Integrations'],
  [['comparison'], 'Comparisons and alternatives'],
  [['ranking'], 'Rankings and foundations'],
  [['guide'], 'Task guides'],
  [['use-case'], 'Use cases'],
  [['tool', 'article'], 'Tools and research'],
  [['legal'], 'Legal'],
];

export const GET: APIRoute = () => {
  const lines = [
    '# AliasMode',
    '',
    '> AliasMode is a free, open-source antidetect browser for managing multiple accounts. Unlimited isolated browser profiles, account-free Local mode, free Cloud sync for teams, an AdsPower-compatible Local API, Playwright over CDP, a local MCP server, and Remote MCP for Claude, ChatGPT, and other agents. Windows native app; macOS runs the dashboard from source; Linux clients use Remote MCP through a Windows host.',
    '',
    `Site: ${siteConfig.metadataOrigin}/`,
    `Sitemap: ${new URL('/sitemap.xml', siteConfig.metadataOrigin)}`,
    `Local API (OpenAPI 3.1): ${new URL('/openapi/aliasmode-local-api.json', siteConfig.metadataOrigin)}`,
    `Source code: ${siteConfig.githubRepository}`,
    '',
  ];
  for (const [kinds, heading] of groups) {
    const routes = indexableRoutes.filter((route) => kinds.includes(route.kind)).sort((a, b) => a.path.localeCompare(b.path));
    if (!routes.length) continue;
    lines.push(`## ${heading}`, '');
    for (const route of routes) lines.push(`- [${route.title}](${new URL(route.path, siteConfig.metadataOrigin)}): ${route.description}`);
    lines.push('');
  }
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
