export type Release =
  | { state: 'unpublished' }
  | { state: 'published'; version: string; tag: string; windowsFile: string; sha256: string };

export const release: Release = {
  state: 'published',
  version: '0.1.0-beta.34',
  tag: 'v0.1.0-beta.34',
  windowsFile: 'AliasMode_0.1.0-beta.34_x64-setup.exe',
  sha256: '9c1c368c1836e13a591c13b52be5c6ec473e8766e56e0a9653df9e8add7aaffa',
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
