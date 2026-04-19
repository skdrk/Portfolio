// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      // Allow all hosts for ngrok compatibility (development only)
      allowedHosts: true,
    },
  },
});
