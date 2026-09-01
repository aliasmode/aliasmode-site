import type { APIRoute } from 'astro';
import spec from '../../data/generated/local-api.openapi.json';

/** Machine-readable copy of the Local API contract rendered on /docs/local-api/. */
export const GET: APIRoute = () =>
  new Response(`${JSON.stringify(spec, null, 2)}\n`, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
