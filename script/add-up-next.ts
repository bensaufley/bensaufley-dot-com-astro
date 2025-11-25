#!/usr/bin/env -S npx tsx
/* eslint-disable no-await-in-loop */
import cli from 'cli';
import { request } from 'graphql-request';

import { GetUpNextDocument } from './lib/graphql-operations';
import upsertBook from './lib/upsertBook';

const args = cli.parse({
  token: ['t', 'Hardcover token', 'string'],
});

const editions = cli.args.map((arg) => Number(arg.trim())).filter((arg) => !Number.isNaN(arg));

if (!args.token) {
  cli.error('Please provide a Hardcover token with -t or --token');
  cli.getUsage(1);
}

if (!editions.length) {
  cli.error('Please provide at least one edition ID to add to Up Next');
  cli.getUsage(1);
}

const token = (args.token.startsWith('Bearer ') ? (args.token as string) : `Bearer ${args.token}`).trim();

const responses = await Promise.allSettled(
  editions.map((edition) =>
    request(
      'https://api.hardcover.app/v1/graphql',
      GetUpNextDocument,
      { edition },
      {
        Authorization: token,
      },
    ),
  ),
);

for (let i = 0, len = responses.length; i < len; i += 1) {
  const response = responses[i]!;
  const editionId = editions[i];
  if (response.status === 'fulfilled') {
    const [edition] = response.value.editions;
    if (edition) {
      await upsertBook({
        slug: edition.book.slug,
        title: edition.book.title,
        subtitle: edition.book.subtitle,
        contributions: edition.contributions || [],
        isbn10: edition.isbn_10,
        isbn13: edition.isbn_13,
        asin: edition.asin,
        editionId: edition.id,
        editionImage: edition.image?.url,
        bookImage: edition.book.image?.url,
        releaseDate: edition.book.release_date,
        series: edition.book.book_series || [],
      });
      continue;
    }
  }
  cli.error(
    `Error adding edition ID ${editionId} to Up Next: ${response.status === 'rejected' ? response.reason : 'no edition found'}`,
  );
}
