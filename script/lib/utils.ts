import dayjs, { type Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { readFileSync } from 'fs';
import { readdir } from 'fs/promises';
import { resolve } from 'path/posix';

dayjs.extend(utc);

const dirname = typeof __dirname !== 'undefined' ? __dirname : import.meta.dirname;

export const parseAuthor = (author: string) => {
  const parts = author.split(/\s+/g);
  return {
    lastName: parts.slice(-1).join(' '),
    firstName: parts.slice(0, -1).join(' ') || undefined,
  };
};
export const parseAuthors = (authors: string) => authors.split(/,\s*/g).map(parseAuthor);
export const defaultDate = await readdir(resolve(dirname, '../../src/content/books'), { withFileTypes: true }).then(
  (files) =>
    files.reduce<Dayjs>((maxRead, file) => {
      if (!file.isFile() && file.name.endsWith('.md')) return maxRead;

      const finishedAt = readFileSync(resolve(dirname, `../../src/content/books/${file.name}`), 'utf-8').match(
        /^finishedAt: *(.+)$/im,
      );
      if (!finishedAt) return maxRead;

      const date = dayjs(finishedAt[1]);
      return date.isAfter(maxRead) ? date : maxRead;
    }, dayjs.utc('2020-01-01')),
);
