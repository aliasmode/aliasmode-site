import { defineConfig } from 'astro/config';
import { siteConfig } from './site.config.mjs';

export default defineConfig({
  output: 'static',
  site: siteConfig.origin || undefined,
});
