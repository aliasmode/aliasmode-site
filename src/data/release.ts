export type Release =
  | { state: 'unpublished' }
  | { state: 'published'; version: string; tag: string; windowsFile: string; sha256: string };

export const release: Release = {
  state: 'published',
  version: '0.1.0-beta.33',
  tag: 'v0.1.0-beta.33',
  windowsFile: 'AliasMode_0.1.0-beta.33_x64-setup.exe',
  sha256: '907fdfdc01f4000ab9a6c351c5a98d9942b3ef1b5a1b0435fa9f9beacfe0d076',
};

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
