import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config.mjs';
import { indexableRoutes } from '../data/site-routes';

export const GET: APIRoute = () => {
  const urls = indexableRoutes
    .map((route) => new URL(route.path, siteConfig.metadataOrigin).toString())
    .sort((a, b) => a.localeCompare(b));
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
