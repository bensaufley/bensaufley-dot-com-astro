#!/usr/bin/env -S npx tsx
/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-extraneous-dependencies */

import cli from 'cli';
import dayjs, { type Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Enquirer from 'enquirer';
import { gql, request } from 'graphql-request';
import { existsSync, readFileSync } from 'node:fs';
import { readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { stringify } from 'yaml';

import type { BookFrontmatter } from '~content/config';

const enquirer = new Enquirer<{
  shouldAdd?: boolean;
  editBook?: boolean;
  changeField?: string;
  newValue?: string;
  saveBook?: boolean;
}>();

dayjs.extend(utc);

const dirname = import.meta.dirname ?? __dirname;

const parseAuthor = (author: string) => {
  const parts = author.split(/\s+/g);
  return {
    lastName: parts.slice(-1).join(' '),
    firstName: parts.slice(0, -1).join(' ') || undefined,
  };
};

const parseAuthors = (authors: string) => authors.split(/,\s*/g).map(parseAuthor);

const defaultDate = await readdir(resolve(dirname, '../src/content/books'), { withFileTypes: true }).then((files) =>
  files.reduce<Dayjs>((maxRead, file) => {
    if (!file.isFile() && file.name.endsWith('.md')) return maxRead;

    const readDate = readFileSync(resolve(dirname, `../src/content/books/${file.name}`), 'utf-8').match(
      /^read: *(.+)$/im,
    );
    if (!readDate) return maxRead;

    const date = dayjs(readDate[1]);
    return date.isAfter(maxRead) ? date : maxRead;
  }, dayjs.utc('2020-01-01')),
);

const args = cli.parse({
  token: ['t', 'Hardcover token', 'string'],
  since: ['s', 'Only update books since this date (ISO 8601)', 'date', defaultDate.format('YYYY-MM-DD')],
});

if (!args.token) {
  cli.error('Please provide a Hardcover token with -t or --token');
  cli.getUsage(1);
}

const since = dayjs.utc(args.since);

const token = (args.token.startsWith('Bearer ') ? (args.token as string) : `Bearer ${args.token}`).trim();

interface Response {
  me: [
    {
      user_books: {
        book: {
          title: string;
          subtitle: string;
          book_series: {
            series: {
              name: string;
            };
            position: number;
          }[];
          image?: {
            url: string;
          } | null;
          slug: string;
          release_date: string;
        };
        edition: {
          id: string;
          isbn_10?: string | null;
          isbn_13?: string | null;
          asin?: string | null;
          image?: {
            url: string;
          } | null;
          contributions: {
            contribution?: string | null;
            author: {
              name: string;
            };
          }[];
        };
        last_read_date: string | null;
        review_html: string | null;
        review_raw: string | null;
        rating: number | null;
        user_book_status: {
          status: string;
        };
      }[];
    },
  ];
}

const resp = await request<Response>(
  'https://api.hardcover.app/v1/graphql',
  gql`
    query GetBooks($minDate: date!) {
      me {
        user_books(
          where: {
            _or: [
              { last_read_date: { _gte: $minDate } }
              {
                user_book_status: { status: { _eq: "Currently Reading" } }
                user_book_reads: { started_at: { _gte: $minDate } }
              }
            ]
          }
        ) {
          book {
            title
            subtitle
            book_series(limit: 1) {
              series {
                name
              }
              position
            }
            image {
              url
            }
            slug
            release_date
          }
          edition {
            id
            isbn_10
            isbn_13
            asin
            image {
              url
            }
            contributions(
              where: { _or: [{ contribution: { _is_null: true } }, { contribution: { _eq: "Narrator" } }] }
            ) {
              contribution
              author {
                name
              }
            }
          }
          last_read_date
          review_html
          review_raw
          rating
          user_book_status {
            status
          }
        }
      }
    }
  `,
  { minDate: since.format('YYYY-MM-DD') },
  {
    Authorization: token,
  },
);

cli.info(`Found ${resp.me[0].user_books.length} books since ${since.format('YYYY-MM-DD')}`);

const { user_books: books } = resp.me[0];
// eslint-disable-next-line no-restricted-syntax
for (const book of books) {
  // eslint-disable-next-line no-await-in-loop
  const shouldAddResp = await enquirer.prompt({
    type: 'confirm',
    name: 'shouldAdd',
    message: `Do you want to add the book titled "${book.book.title}"?`,
    initial: true,
  });
  // eslint-disable-next-line no-continue
  if (!shouldAddResp.shouldAdd) continue;

  const { book: bookData, edition } = book;
  const fm: BookFrontmatter & { slug?: string } = {
    slug: bookData.slug,
    title: bookData.title,
    subtitle: bookData.subtitle || null,
    authors: book.edition.contributions
      .filter((c) => c.contribution !== 'Narrator')
      .map(({ author: { name } }) => parseAuthor(name)),
    narrators: book.edition.contributions
      .filter((c) => c.contribution === 'Narrator')
      .map(({ author: { name } }) => parseAuthor(name)),
    yearPublished: bookData.release_date ? dayjs.utc(bookData.release_date).year() : null,
    isbn10: edition.isbn_10 || null,
    isbn13: edition.isbn_13 || null,
    asin: edition.asin || null,
    coverImageUrl: edition.image?.url || bookData.image?.url || null,
    hardcoverUrl: `https://hardcover.app/books/${bookData.slug}/editions/${edition.id}`,
    series: bookData.book_series.length
      ? {
          name: bookData.book_series[0]!.series.name,
          volume: bookData.book_series[0]!.position,
        }
      : null,
    ...(book.last_read_date
      ? {
          reading: false,
          read: dayjs.utc(book.last_read_date).toDate(),
          rating: book.rating ?? null,
        }
      : {
          reading: true,
          read: null,
          rating: null,
        }),
  };

  cli.info('How does this look?');
  cli.info(stringify(fm, null, 2));
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { editBook } = await enquirer.prompt({
      type: 'confirm',
      name: 'editBook',
      message: 'Do you want to edit this book?',
      initial: false,
    });
    if (!editBook) break;

    const { changeField } = await enquirer.prompt({
      type: 'select',
      name: 'changeField',
      message: 'Which field do you want to change?',
      choices: Object.keys(fm),
    });
    let { newValue } = await enquirer.prompt({
      type: 'input',
      name: 'newValue',
      message: `Enter new value for ${changeField}:`,
      initial: fm[changeField as keyof BookFrontmatter] ?? '',
    });
    if (newValue === fm[changeField as keyof BookFrontmatter] || !newValue?.trim()) {
      newValue = '';
    }
    const field = changeField as keyof BookFrontmatter | 'slug';
    switch (field) {
      case 'read':
        fm.read = newValue ? dayjs.utc(newValue).toDate() : null;
        break;
      case 'reading':
        fm.reading = ['true', '1', 't', 'y'].includes(newValue?.toLowerCase() ?? 'f');
        break;
      case 'rating': {
        const rating = newValue ? parseFloat(newValue) : null;
        if (rating !== null && (Number.isNaN(rating) || rating < 0 || rating > 5)) {
          cli.error('Rating must be a number between 0 and 5');
          continue;
        }
        fm.rating = rating;
        break;
      }
      case 'authors':
      case 'narrators':
        fm[field] = newValue ? parseAuthors(newValue) : [];
        break;
      case 'series': {
        if (newValue) {
          const match = newValue.match(/^(.+?)(?:\s*#(\d+))?$/);
          if (match) {
            fm.series = {
              name: match[1]!.trim(),
              volume: match[2] ? parseInt(match[2], 10) : (fm.series?.volume ?? null),
            };
          } else {
            fm.series = null;
          }
        } else {
          fm.series = null;
        }
        break;
      }
      case 'yearPublished':
        fm.yearPublished = newValue ? parseInt(newValue, 10) : null;
        break;
      case 'title':
      case 'slug':
        if (!newValue) {
          cli.error(`The ${field} cannot be empty`);
          continue;
        }
        fm[field] = newValue;
        break;
      default:
        fm[field] = newValue || null;
    }

    cli.info('Updated book frontmatter:');
    cli.info(stringify(fm, null, 2));
  }

  const { slug } = fm;
  const fileName = resolve(dirname, '../src/content/books', `${slug!}.md`);
  delete fm.slug; // Remove slug from frontmatter, it will be used as the filename

  const willOverwrite = existsSync(fileName);
  const { saveBook } = await enquirer.prompt({
    type: 'confirm',
    name: 'saveBook',
    message: `Do you want to save this book?${
      willOverwrite ? ` (this will overwrite the existing file at ${fileName})` : ''
    }`,
    initial: true,
  });
  if (!saveBook) continue;

  await writeFile(
    fileName,
    `---\n${stringify(fm, null, 2).trim()}\n---\n${book.review_html ?? book.review_raw ?? ''}\n`,
    {
      flag: 'w',
      encoding: 'utf-8',
    },
  );
  cli.info(`Book "${fm.title}" updated successfully!`);
}
