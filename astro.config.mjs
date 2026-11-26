import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.martinklug.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
