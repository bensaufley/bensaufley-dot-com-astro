import type { CollectionEntry } from 'astro:content';
import dayjs from 'dayjs';
import { basename, extname } from 'node:path';

// eslint-disable-next-line import/prefer-default-export
export const slug = (post: CollectionEntry<'posts'>) =>
  dayjs(post.data.date).format('YYYY/MM/') + basename(post.id, extname(post.id));
