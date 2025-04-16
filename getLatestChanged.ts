/* eslint-disable import/no-extraneous-dependencies, no-console */

import { parseFrontmatter } from '@astrojs/markdown-remark';
import type { InferEntrySchema } from 'astro:content';
import dayjs, { type Dayjs } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { cruise, type ICruiseResult } from 'dependency-cruiser';
import { existsSync, readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import simpleGit from 'simple-git';

import { slug } from './src/lib/posts.js';

dayjs.extend(utc);
dayjs.extend(timezone);

export const dirname = typeof __dirname !== 'undefined' ? __dirname : import.meta.dirname;
const git = simpleGit(dirname);

export const getLastModified = async (path: string) => {
  if (!existsSync(path)) throw new Error(`File not found: ${path}`);
  const log = await git.log({ file: path });
  const date = log.all.at(0)?.date;
  if (!date) throw new Error(`No log entry found for: ${path}`);
  return dayjs.utc(date);
};

const getLatestChanged = async (input: string | string[]): Promise<Dayjs> => {
  const sharedFiles = await cruise(Array.isArray(input) ? input : [input], {
    maxDepth: 10,
    doNotFollow: {
      path: ['node_modules'],
      dependencyTypes: ['type-only'],
    },
  });

  const latestChange: Dayjs = (
    await Promise.all(
      (sharedFiles.output as ICruiseResult).modules
        .filter((m) => !m.source.startsWith('node_modules/'))
        .map(async (m) => {
          const path = resolve(dirname, m.source.replace('~', 'src/'));
          return getLastModified(path).catch(() => null);
        }),
    )
  )
    .filter((v) => !!v)
    .reduce((latest: Dayjs | null, date: Dayjs) => {
      if (!latest) return date;
      return date > latest ? date : latest;
    }, null)!;

  return latestChange;
};

export const getLastMods = async () => {
  const baseLayout = 'src/layouts/BaseLayout.astro';
  const latestSharedChange = await getLatestChanged(baseLayout);
  console.log(`Latest shared file change: ${latestSharedChange}`);

  const latestBlogEntryChange = await getLatestChanged(
    readdirSync('./src/content/posts', { withFileTypes: true })
      .filter((file) => file.isFile())
      .map((file) => `src/content/posts/${file.name}`),
  );
  console.log(`Latest blog entry change: ${latestBlogEntryChange}`);
  const blogPostUpdates = Object.fromEntries<Dayjs>(
    await Promise.all(
      readdirSync('./src/content/posts', { withFileTypes: true })
        .filter((file) => file.isFile())
        .map((file) => `src/content/posts/${file.name}`)
        .map(async (file) => {
          const raw = (await readFile(file)).toString();
          const frontmatter = parseFrontmatter(raw).frontmatter as InferEntrySchema<'posts'>;
          console.log({ file, frontmatter });
          return [
            slug({ id: file, data: frontmatter }),
            await getLatestChanged(file)
              .catch(() => null)
              .then((d) => d || dayjs.tz(frontmatter.date, 'America/New_York')),
          ] as const;
        }),
    ),
  );
  console.log(`Latest blog entry changes: ${JSON.stringify(blogPostUpdates, null, 2)}`);

  const latestReadingEntryChange = await getLatestChanged(
    readdirSync('./src/content/books', { withFileTypes: true })
      .filter((file) => file.isFile())
      .map((file) => `src/content/books/${file.name}`),
  );
  console.log(`Latest reading entry change: ${latestReadingEntryChange}`);

  return {
    latestSharedChange,
    latestBlogEntryChange,
    blogPostUpdates,
    latestReadingEntryChange,
  };
};
