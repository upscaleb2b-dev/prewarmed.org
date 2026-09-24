import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prewarmed.org',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/thanks') && !p.includes('/fix/') })],
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
