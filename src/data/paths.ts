export const canonicalPath = (path: string) => {
  const clean = `/${path.split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, '')}`;
  return clean === '/' ? '/' : `${clean}/`;
};

/** Privacy-safe page identity for aggregate analytics: `alternatives-adspower`, `docs-local-api`, `home`. */
export const analyticsGroupFor = (path: string) =>
  canonicalPath(path).replace(/^\/|\/$/g, '').replace(/\//g, '-').replace(/[^a-z0-9_-]/g, '') || 'home';
