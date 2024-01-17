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
      // TS doesn't like Plugin<any> in PluginOptions but it works and
      // this isn't even TypeScript where I could maybe coerce better.
      // @ts-ignore
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
