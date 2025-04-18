/* eslint-disable no-console, import/no-extraneous-dependencies */
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';
import { resolve } from 'node:path';
import svgr from 'vite-plugin-svgr';

import { getLastMods, type LastMods } from './getLatestChanged.js';

dayjs.extend(minMax);

let lastMods: LastMods;

export default defineConfig({
  integrations: [
    preact(),
    mdx(),
    sitemap({
      serialize: async (entry) => {
        // To only run this calculation once, but not call it if `serialize` isn't called
        if (!lastMods) lastMods = await getLastMods();

        const { latestSharedChange, latestBlogEntryChange, blogPostUpdates, latestReadingEntryChange } = lastMods;
        switch (new URL(entry.url).pathname.match(/^\/[^/]*/)?.[0]) {
          case '/':
          case '/blog': {
            const pathname = new URL(entry.url).pathname.replace(/\/$/, '');
            if (pathname in blogPostUpdates) {
              return {
                ...entry,
                lastmod: dayjs.max(blogPostUpdates[pathname]!, latestSharedChange).toISOString(),
              };
            }
            return {
              ...entry,
              lastmod: dayjs.max(latestBlogEntryChange, latestSharedChange).toISOString(),
            };
          }
          case '/reading': {
            const pathname = new URL(entry.url).pathname.replace(/\/$/, '');
            if (pathname in blogPostUpdates) {
              return {
                ...entry,
                lastmod: dayjs.max(blogPostUpdates[pathname]!, latestSharedChange).toISOString(),
              };
            }
            return {
              ...entry,
              lastmod: dayjs.max(latestReadingEntryChange, latestSharedChange).toISOString(),
            };
          }
          default:
            // get latest modified on main branch
            return { ...entry, lastmod: latestSharedChange.toISOString() };
        }
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
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
    '/blog/0': '/',
    '/reading/0': '/reading',
    '/blog/2025/01/2025-01-29--on-dei': '/blog/2025/01/on-dei',
  },
});
