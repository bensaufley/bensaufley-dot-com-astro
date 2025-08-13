import clsx, { type ClassValue } from 'clsx';

import type { BookFrontmatter } from '~content/config';

import styles from './styles.module.css';

export enum CoverSize {
  XSmall = 'xSmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'xLarge',
}

const CoverImage = ({
  book,
  class: className,
  size,
}: {
  book: BookFrontmatter;
  class?: ClassValue;
  size?: CoverSize | undefined;
}) => {
  const CoverWrap = book.hardcoverUrl ? 'a' : 'div';
  const coverProps = book.hardcoverUrl
    ? {
        href: book.hardcoverUrl,
        target: '_blank',
        rel: 'noopener',
      }
    : {};

  if (!book.coverImageUrl) return null;

  return (
    <CoverWrap class={clsx(styles.cover, className, size && styles[size])} {...coverProps}>
      <img src={book.coverImageUrl} alt={`Cover of ${book.title}`} loading="lazy" />
    </CoverWrap>
  );
};
export default CoverImage;
