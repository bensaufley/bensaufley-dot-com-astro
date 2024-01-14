// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import svgr from 'vite-plugin-svgr';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx(), sitemap()],
  vite: {
    plugins: [
      svgr({
        svgrOptions: {
          jsxRuntime: 'classic-preact',
        },
        esbuildOptions: {
          jsxFactory: 'h',
          jsxImportSource: 'preact',
          jsxFragment: 'Fragment',
        },
      }),
    ],
  },
  output: 'static',
  redirects: {
    '/blog/0': '/',
  },
});
