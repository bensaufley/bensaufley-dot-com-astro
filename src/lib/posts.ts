import type { CollectionEntry } from 'astro:content';
import dayjs from 'dayjs';
import { basename, extname } from 'node:path';

// eslint-disable-next-line import/prefer-default-export
export const slug = (post: Pick<CollectionEntry<'posts'>, 'id' | 'data'>) => {
  const postDate = dayjs.utc(post.data.date);
  const postBaseRegEx = new RegExp(`^${postDate.format('YYYY-MM-DD')}--`);
  const result = postDate.format('YYYY/MM/') + basename(post.id.replace(postBaseRegEx, ''), extname(post.id));
  return result;
};
