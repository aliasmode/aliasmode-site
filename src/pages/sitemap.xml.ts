import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config.mjs';
import { indexableRoutes } from '../data/site-routes';

export const GET: APIRoute = () => {
  const entries = indexableRoutes
    .map((route) => ({ loc: new URL(route.path, siteConfig.metadataOrigin).toString(), lastmod: route.modifiedOn }))
    .sort((a, b) => a.loc.localeCompare(b.loc));
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map((entry) => `  <url><loc>${entry.loc}</loc><lastmod>${entry.lastmod}</lastmod></url>`),
    '</urlset>',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
