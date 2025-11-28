import MagnifyingGlass from '@phosphor-icons/core/regular/magnifying-glass.svg?component-solid';
import clsx from 'clsx';
import { createSignal, For, Show } from 'solid-js';
import { effect, Portal } from 'solid-js/web';

import HotKey, { Meta } from '~components/HotKey';

import { getPagefind } from './pagefind';
import type * as PagefindWebJs from './pagefind-web-js';
import Result from './Result';

import styles from './styles.module.css';

const SearchItem = () => {
  let searchOverlay: HTMLDivElement | undefined;

  const [showSearch, setShowSearch] = createSignal(false);
  const [searchText, setSearchText] = createSignal('');
  const [results, setResults] = createSignal<readonly PagefindWebJs.PagefindSearchResult[] | null>(null);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  const [initialized, pf] = getPagefind();

  effect(() => {
    if (!showSearch()) {
      setSearchText('');
      return undefined;
    }
    if (!searchOverlay) return undefined;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowSearch(false);
      }
    };

    const clickHandler = (e: MouseEvent) => {
      if (e.target === searchOverlay) setShowSearch(false);
    };

    searchOverlay.addEventListener('keydown', onKeyDown);
    searchOverlay.addEventListener('click', clickHandler);

    (searchOverlay.querySelector('input[type="search"]') as HTMLInputElement).focus();

    return () => {
      searchOverlay?.removeEventListener('keydown', onKeyDown);
      searchOverlay?.removeEventListener('click', clickHandler);
    };
  });

  effect(() => {
    let canceled = false;
    const text = searchText();

    if (!initialized()) return undefined;

    if (!text) {
      setResults(null);
      return undefined;
    }

    pf.pagefind!.debouncedSearch(text).then((results) => {
      if (canceled) return;
      setResults(results?.results ?? null);
    });

    return () => {
      canceled = true;
    };
  });

  return (
    <Show when={initialized()}>
      <button class={styles.search}>
        <MagnifyingGlass />
        <HotKey class={styles.hotKey} combo={[Meta, 'K']} handler={() => setShowSearch(true)} />
      </button>
      <Portal>
        <div class={clsx(styles.searchOverlay, showSearch() && styles.visible)} ref={searchOverlay}>
          <div class={styles.modal}>
            <h3>
              <MagnifyingGlass /> Search
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search"
                autofocus
                onInput={({ currentTarget: { value } }) => {
                  setSearchText(value);
                }}
                value={searchText()}
              />
            </form>
            <Show when={results()}>
              <div class={styles.results}>
                <Show when={results()!.length > 0} fallback={<p>No results found.</p>}>
                  <p>
                    {results()!.length} result{results()!.length !== 1 && 's'} found:
                  </p>
                  <For each={results()!}>{(result) => <Result result={result} />}</For>
                </Show>
              </div>
            </Show>
          </div>
        </div>
      </Portal>
    </Show>
  );
};

export default SearchItem;
