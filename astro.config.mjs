// @ts-check
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx(), sitemap(), partytown()],
  vite: {
    plugins: [
      // TS doesn't like Plugin<any> in PluginOptions but it works and
      // this isn't even TypeScript where I could maybe coerce better.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
