// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      // Allow all hosts for ngrok compatibility (development only)
      allowedHosts: true,
    },
  },

  adapter: cloudflare(),
});