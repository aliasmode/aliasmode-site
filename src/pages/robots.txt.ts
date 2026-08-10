import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config.mjs';

export const GET: APIRoute = () => {
  const policy = siteConfig.index
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', siteConfig.origin)}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(policy, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
