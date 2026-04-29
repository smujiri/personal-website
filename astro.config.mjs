import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ka', 'ru', 'de', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
