import type { Evidence } from '../data/content/types';

/** `2026-09-01` -> `September 2026`. */
export const monthYear = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export const findEvidence = (evidence: Evidence[] | undefined, id?: string) =>
  id ? evidence?.find((item) => item.id === id) : undefined;

/** Plain-text citation. Never includes the URL. */
export const citation = (item: Evidence) => `${item.source} · checked ${monthYear(item.checkedOn)}`;

/** Stable, URL-safe fragment id. */
export const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
