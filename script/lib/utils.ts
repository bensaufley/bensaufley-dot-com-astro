import dayjs, { type Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { existsSync, readFileSync } from 'fs';
import { readdir, readFile } from 'fs/promises';
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

const tokenPath = resolve(dirname, '../../.hardcover-token');
export const getToken = (fromArg?: string | undefined) =>
  Promise.try<string, never[]>(async () => {
    if (fromArg?.trim()) return fromArg.trim();
    if (process.env.HARDCOVER_TOKEN?.trim()) return process.env.HARDCOVER_TOKEN.trim();
    if (existsSync(tokenPath)) {
      const token = await readFile(resolve(dirname, '../../.hardcover-token'), 'utf-8');
      if (token.trim()) return token.trim();
    }
    throw new Error('Please provide a Hardcover token via argument, HARDCOVER_TOKEN env var, or .hardcover-token file');
  }).then((token) => {
    const trimmed = token.trim();
    if (trimmed.toLocaleLowerCase().startsWith('bearer ')) return trimmed;
    return `Bearer ${trimmed}`;
  });
