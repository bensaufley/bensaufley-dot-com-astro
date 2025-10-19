import clsx from 'clsx';
import { For, Show } from 'solid-js';

import styles from './styles.module.css';

export interface Props {
  /** 1-indexed */
  page: number;
  path: string;
  pages: number;
}

const Pagination = ({ page, pages, path }: Props) => {
  const showFirst = page > 2;
  const showPrev = page > 1;
  const showNext = page < pages - 1;
  const showLast = page < pages - 2;

  const length = Math.min(pages - 1, 6);
  const first = Math.max(page - 3, 1);
  const last = Math.min(first + length, pages - 1);
  const numberedPages = Array.from({ length }, (_, i) => last - (length - i) + 1);

  return (
    <div class={styles.pageNav}>
      <Show when={showFirst}>
        <a href={path}>&#9666;&#9666;</a>
      </Show>
      <Show when={showPrev}>
        <a href={page - 1 === 1 ? path : `${path}${page - 1}`}>&#9666; Previous</a>
      </Show>
      <For each={numberedPages}>
        {(n) => (
          <a href={`${path}${n === 1 ? '' : n}`} class={clsx(n === page && styles.active)}>
            {n}
          </a>
        )}
      </For>
      <Show when={showNext}>
        <a href={`${path}${page + 1}`}>Next &#9656;</a>
      </Show>
      <Show when={showLast}>
        <a href={`${path}${pages - 1}`}>&#9656;&#9656;</a>
      </Show>
    </div>
  );
};

export default Pagination;
