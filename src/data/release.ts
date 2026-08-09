export type Release =
  | { state: 'unpublished' }
  | { state: 'published'; version: string; tag: string; windowsFile: string; sha256: string };

export const release: Release = { state: 'unpublished' };

const releases = 'https://github.com/aliasmode/aliasmode/releases';
const sha256 = /^[a-f0-9]{64}$/;
const version = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;
const tag = /^[0-9A-Za-z][0-9A-Za-z._-]*$/;
const windowsFile = /^[0-9A-Za-z][0-9A-Za-z._-]*\.(?:exe|msi)$/i;

export function publishedRelease(item: Release) {
  if (item.state !== 'published') return null;
  if (!version.test(item.version) || !tag.test(item.tag) || !windowsFile.test(item.windowsFile) || !sha256.test(item.sha256)) {
    throw new Error('Published release metadata is incomplete or inconsistent.');
  }
  const base = `${releases}/download/${encodeURIComponent(item.tag)}`;
  return { ...item, pageUrl: `${releases}/tag/${encodeURIComponent(item.tag)}`, downloadUrl: `${base}/${encodeURIComponent(item.windowsFile)}` };
}

export const published = publishedRelease(release);
export const releasePage = releases;
