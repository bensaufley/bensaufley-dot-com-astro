import clsx from 'clsx';
import { createSignal, createUniqueId, Show } from 'solid-js';
import { effect } from 'solid-js/web';

import type * as PagefindWebJs from './pagefind-web-js';

import styles from './styles.module.css';

const Result = ({ result }: { result: PagefindWebJs.PagefindSearchResult }) => {
  const [metadata, setMetadata] = createSignal<PagefindWebJs.PagefindSearchFragment | null>(null);
  const [error, setError] = createSignal<Error | null>(null);

  const id = createUniqueId();

  effect(() => {
    let canceled = false;
    result
      .data()
      .then((data) => {
        if (canceled) return;
        setMetadata(data);
      })
      .catch((err) => {
        if (canceled) return;
        setError(err);
      });
    return () => {
      canceled = true;
    };
  });

  return (
    <div class={clsx(styles.result, !metadata() && !error() && styles.loading)}>
      <Show when={!!metadata()} fallback={<Show when={!error()}>Loading…</Show>}>
        <a href={metadata()!.url}>
          <h3>{metadata()!.meta.title?.replace(/^Ben Saufley - /, '')}</h3>
          <div data-pagefind-result-id={id} innerHTML={metadata()!.excerpt} />
        </a>
      </Show>
    </div>
  );
};

export default Result;
