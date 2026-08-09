import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config.mjs';

export const GET: APIRoute = () => new Response(siteConfig.index ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
