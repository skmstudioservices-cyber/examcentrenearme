import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://examcentrenearme.pages.dev',
  integrations: [sitemap()],
  redirects: { '/sitemap.xml': '/sitemap-index.xml' },
});
