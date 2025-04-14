// @ts-check
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx(), sitemap(), partytown()],
  site: 'https://bensaufley.com',
  vite: {
    resolve: {
      alias: {
        '~components': resolve('./src/components'),
        '~content': resolve('./src/content'),
        '~lib': resolve('./src/lib'),
        '~layouts': resolve('./src/layouts'),
        '~pages': resolve('./src/pages'),
      },
    },
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
    '/blog': '/',
    '/blog/': '/',
    '/blog/0': '/',
    '/reading/0': '/reading',
  },
});
