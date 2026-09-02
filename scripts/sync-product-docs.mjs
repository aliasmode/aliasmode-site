#!/usr/bin/env node
/**
 * Copies the public documentation contracts from the AliasMode product
 * repository into src/data/generated/ and pins their checksums.
 *
 *   node scripts/sync-product-docs.mjs --from ../aliasmode        # update copies + manifest
 *   node scripts/sync-product-docs.mjs --check                    # verify copies match the pinned manifest
 *   node scripts/sync-product-docs.mjs --check --from ../aliasmode # also verify against the product checkout
 *
 * The site build never fetches these at build time; the committed copies are the input.
 */
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);
const target = join(root, 'src/data/generated');
const manifestPath = join(target, 'manifest.json');
const args = process.argv.slice(2);
const check = args.includes('--check');
const fromIndex = args.indexOf('--from');
const from = fromIndex >= 0 ? resolve(args[fromIndex + 1]) : undefined;
const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');
const fail = (message) => { console.error(`sync-product-docs: ${message}`); process.exit(1); };

const readProductManifest = (dir) => {
  const file = join(dir, 'docs/public/manifest.json');
  if (!existsSync(file)) fail(`${file} does not exist; run \`bun run docs:public\` in the product repository first`);
  return JSON.parse(readFileSync(file, 'utf8'));
};

const artifactsOf = (productManifest) => [
  { key: 'openapi', path: productManifest.openapi.path, local: 'local-api.openapi.json' },
  ...Object.entries(productManifest.mcpCatalogs).map(([key, entry]) => ({ key: `mcp:${key}`, path: entry.path, local: `mcp-tools/${entry.path.split('/').pop()}` })),
];

if (from) {
  const productManifest = readProductManifest(from);
  const productVersion = productManifest.productVersion;
  const ref = (() => {
    try {
      return execFileSync('git', ['-C', from, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
    } catch {
      return 'unknown';
    }
  })();
  const entries = {};
  for (const artifact of artifactsOf(productManifest)) {
    const source = join(from, 'docs/public', artifact.path);
    if (!existsSync(source)) fail(`missing product artifact ${source}`);
    const bytes = readFileSync(source);
    const localPath = join(target, artifact.local);
    if (check) {
      if (!existsSync(localPath)) fail(`${artifact.local} is missing from the site; run without --check to copy it`);
      if (sha256(readFileSync(localPath)) !== sha256(bytes)) fail(`${artifact.local} differs from the product repository copy`);
    } else {
      mkdirSync(join(localPath, '..'), { recursive: true });
      writeFileSync(localPath, bytes);
    }
    entries[artifact.key] = { path: artifact.local, sha256: sha256(bytes) };
  }
  const manifest = { schemaVersion: 1, productVersion, productRef: ref, releasedVersions: productManifest.releasedVersions, artifacts: entries };
  const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
  if (check) {
    if (!existsSync(manifestPath) || readFileSync(manifestPath, 'utf8') !== serialized) fail('src/data/generated/manifest.json is out of date');
  } else {
    writeFileSync(manifestPath, serialized);
    console.log(`Synced ${Object.keys(entries).length} artifacts from AliasMode ${productVersion} (${ref}).`);
  }
}

if (check) {
  if (!existsSync(manifestPath)) fail('src/data/generated/manifest.json is missing');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  for (const [key, entry] of Object.entries(manifest.artifacts)) {
    const file = join(target, entry.path);
    if (!existsSync(file)) fail(`${entry.path} (${key}) is missing`);
    if (sha256(readFileSync(file)) !== entry.sha256) fail(`${entry.path} (${key}) does not match its pinned checksum`);
  }
  const release = readFileSync(join(root, 'src/data/release.ts'), 'utf8').match(/version:\s*'([^']+)'/)?.[1];
  if (release && !manifest.artifacts[`mcp:${release}`]) fail(`release ${release} has no matching MCP catalog in src/data/generated/manifest.json`);
  console.log(`Generated product docs verified for AliasMode ${manifest.productVersion}.`);
}
