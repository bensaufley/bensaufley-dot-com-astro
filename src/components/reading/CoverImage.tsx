import { Dynamic } from 'solid-js/web';

import type { BookFrontmatter } from '~content/config';

import styles from './styles.module.css';

const CoverImage = ({ book }: { book: BookFrontmatter }) => {
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
    <Dynamic component={CoverWrap} class={styles.cover} {...coverProps}>
      <img src={book.coverImageUrl} alt={`Cover of ${book.title}`} loading="lazy" />
    </Dynamic>
  );
};
export default CoverImage;
