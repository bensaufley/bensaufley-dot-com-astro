import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { type DataEntryMap, getCollection } from 'astro:content';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type { ComponentType } from 'preact';

import type { BookFrontmatter } from '~content/config';
import { slug as getSlug } from '~lib/posts';

export type BookPost = DataEntryMap['books'][string] & {
  data: BookFrontmatter & {
    date: Date;
    eventType: 'started' | 'finished';
  };
};

dayjs.extend(utc);

const mdParser = await createMarkdownProcessor();

const parseMd = async (source: string, _id: string) => mdParser.render(source);

export const getFeed = async (page?: number, perPage?: number) => {
  const posts = await getCollection('posts');
  const books = await getCollection('books').then((collection) =>
    collection.flatMap((book): BookPost[] =>
      [
        !!book.data.startedAt && {
          ...book,
          data: {
            ...book.data,
            date: dayjs.utc(book.data.startedAt).toDate(),
            eventType: 'started' as const,
          },
        },
        !!book.data.finishedAt && {
          ...book,
          data: {
            ...book.data,
            date: dayjs.utc(book.data.finishedAt).toDate(),
            eventType: 'finished' as const,
          },
        },
      ].filter((v) => !!v),
    ),
  );

  const allEntries = [...posts, ...books].sort((a, b) => dayjs.utc(b.data.date).diff(dayjs.utc(a.data.date), 'day'));
  let selected: typeof allEntries;
  if (perPage) {
    const start = (page || 1) - 1;
    selected = allEntries.slice(start * perPage, start * perPage + perPage);
  } else {
    selected = allEntries;
  }
  const processed = await Promise.all(
    selected.map(async (entry) => {
      switch (entry.collection) {
        case 'books':
          return entry;
        case 'posts': {
          const slug = getSlug(entry);
          let Content: AstroComponentFactory | ComponentType = () => null;
          let html: string | null = null;
          if (entry.data.preview) {
            html = entry.data.preview;
          } else if (entry.body.includes('<!--more-->')) {
            const [teaser] = entry.body.split(/(<!--more-->|\{\/\* ?more ?\*\/\})/);
            const resp = await parseMd(teaser!, entry.id);
            const { code: value } = resp;
            // Manually replace footnote links with links to anchors in the blog entry itself
            html = value
              .toString()
              .replace(/\[\^(\d+)\]/g, (_, n) => `<sup><a href="/blog/${slug}#user-content-fn-${n}">${n}</a></sup>`);
          } else {
            ({ Content } = await entry.render());
          }

          return {
            ...entry,
            Content,
            html,
            slug,
          };
        }
        default:
          throw new Error(`Unknown entry type: ${(entry as any).collection}`);
      }
    }),
  );

  return [processed, allEntries.length] as const;
};
