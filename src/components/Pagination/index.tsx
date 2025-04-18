import clsx from 'clsx';

import styles from './styles.module.css';

export interface Props {
  page: number;
  path: string;
  pages: number;
}

const Pagination = ({ page, pages, path }: Props) => (
  <div class={styles.pageNav}>
    {page > 1 && <a href={path}>&#9666;&#9666;</a>}
    {page > 0 && <a href={page === 1 ? path : `${path}${page - 1}`}>&#9666; Previous</a>}
    {Array.from({ length: Math.min(pages, 6) }).map((_, i) => {
      const n = Math.max(page - 3, 0) + i;
      return (
        <a key={n} href={`${path}${n || ''}`} class={clsx(n === page && styles.active)}>
          {n + 1}
        </a>
      );
    })}
    {page <= pages && <a href={`${path}${page + 1}`}>Next &#9656;</a>}
    {page < pages - 2 && <a href={`${path}${pages}`}>&#9656;&#9656;</a>}
  </div>
);

export default Pagination;
