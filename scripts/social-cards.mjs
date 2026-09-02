#!/usr/bin/env node
/**
 * Renders the 1200x630 social cards for each page family without a browser.
 * SVG templates are rasterized with resvg using the site's typefaces.
 *
 *   npm run social            # writes public/social/<family>.png
 *
 * The three static TTF faces used for rendering are downloaded once into
 * node_modules/.cache/social-fonts/ (authoring step only; the site build
 * never fetches anything).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const root = resolve(new URL('..', import.meta.url).pathname);
const out = join(root, 'public/social');
const fontDir = join(root, 'node_modules/.cache/social-fonts');
mkdirSync(out, { recursive: true });
mkdirSync(fontDir, { recursive: true });

const fonts = {
  'bricolage-grotesque-800.ttf': 'https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvZvlyM0.ttf',
  'inter-500.ttf': 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf',
  'jetbrains-mono-600.ttf': 'https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8FqtjPQ.ttf',
};
for (const [file, url] of Object.entries(fonts)) {
  const target = join(fontDir, file);
  if (existsSync(target)) continue;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`could not download ${url}: ${response.status}`);
  writeFileSync(target, Buffer.from(await response.arrayBuffer()));
}

const cards = {
  comparison: { kicker: 'Compare', title: ['AliasMode vs the antidetect', 'browsers you already know'], line: 'Free, open source, unlimited profiles. Checked against official pricing and docs.', accent: '#8b6bff' },
  ranking: { kicker: 'Best of', title: ['Best antidetect browsers,', 'ranked by real workflows'], line: 'Free tiers, APIs, teams, and AI-agent support compared side by side.', accent: '#ff9e7a' },
  'task-guide': { kicker: 'Guide', title: ['Step-by-step multi-account', 'playbooks that hold up'], line: 'Warm-ups, safe multi-account operations, handoffs, and automation with AliasMode.', accent: '#16c2b8' },
  docs: { kicker: 'Docs', title: ['AliasMode documentation', 'and API reference'], line: 'Local API, MCP server, Remote MCP, Playwright over CDP, CloakBrowser.', accent: '#b7a1ff' },
  integration: { kicker: 'Integration', title: ['Connect Claude, ChatGPT,', 'Codex, and Playwright'], line: 'Local stdio MCP on Windows, Remote MCP anywhere, CDP for automation.', accent: '#8fd8f6' },
  hub: { kicker: 'AliasMode', title: ['The free, open-source', 'antidetect browser'], line: 'Unlimited isolated profiles for people, teams, and AI agents.', accent: '#8b6bff' },
};

const escape = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const svg = ({ kicker, title, line, accent }) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#17142a"/><stop offset=".6" stop-color="#241d47"/><stop offset="1" stop-color="#2e1b7a"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${accent}" stop-opacity=".45"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1040" cy="110" r="330" fill="url(#glow)"/>
  <g transform="translate(72 60) scale(.09)"><path d="M152 96H320C380 96 416 136 416 196V316C416 376 376 416 316 416H196C136 416 96 376 96 316V288" fill="none" stroke="#fff" stroke-width="64" stroke-linecap="round" stroke-linejoin="round"/><path d="M96 288C96 240 136 208 184 208H280" fill="none" stroke="${accent}" stroke-width="64" stroke-linecap="round" stroke-linejoin="round"/></g>
  <text x="132" y="94" font-family="Bricolage Grotesque" font-weight="800" font-size="30" fill="#fff" letter-spacing="-1">AliasMode</text>
  <text x="72" y="200" font-family="JetBrains Mono" font-weight="600" font-size="19" fill="${accent}" letter-spacing="4">${escape(kicker.toUpperCase())}</text>
  <text x="72" y="290" font-family="Bricolage Grotesque" font-weight="800" font-size="66" fill="#fff" letter-spacing="-2.6">${title.map((part, index) => `<tspan x="72" dy="${index === 0 ? 0 : 70}">${escape(part)}</tspan>`).join('')}</text>
  <text x="72" y="460" font-family="Inter" font-weight="500" font-size="27" fill="#d3cbf0">${escape(line)}</text>
  <g font-family="JetBrains Mono" font-weight="600" font-size="15" fill="#e8e1ff" letter-spacing="1.5">
    <rect x="72" y="532" width="98" height="40" rx="20" fill="none" stroke="${accent}" stroke-opacity=".6"/><text x="121" y="558" text-anchor="middle">FREE</text>
    <rect x="182" y="532" width="178" height="40" rx="20" fill="none" stroke="${accent}" stroke-opacity=".6"/><text x="271" y="558" text-anchor="middle">OPEN SOURCE</text>
    <rect x="372" y="532" width="250" height="40" rx="20" fill="none" stroke="${accent}" stroke-opacity=".6"/><text x="497" y="558" text-anchor="middle">UNLIMITED PROFILES</text>
  </g>
  <text x="1128" y="562" text-anchor="end" font-family="JetBrains Mono" font-weight="600" font-size="19" fill="#9990bc">aliasmode.com</text>
</svg>`;

const options = {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: false, fontFiles: Object.keys(fonts).map((file) => join(fontDir, file)), defaultFontFamily: 'Inter' },
};
for (const [family, card] of Object.entries(cards)) {
  const png = new Resvg(svg(card), options).render().asPng();
  writeFileSync(join(out, `${family}.png`), png);
  console.log(`wrote public/social/${family}.png (${png.length} bytes)`);
}
