import { createSignal, onMount } from 'solid-js';

import type * as PagefindWebJs from './pagefind-web-js';

const pf: {
  pagefind: typeof PagefindWebJs | undefined;
  PagefindHighlight: typeof PagefindWebJs.PagefindHighlight | undefined;
} = {
  pagefind: undefined,
  PagefindHighlight: undefined,
};

const PAGEFIND_PATH = '/pagefind/pagefind.js';
const HIGHLIGHTER_PATH = '/pagefind/pagefind-highlight.js';

// eslint-disable-next-line import/prefer-default-export
export const getPagefind = () => {
  const [initialized, setInitialized] = createSignal(!!pf.pagefind || !!pf.PagefindHighlight);

  onMount(async () => {
    pf.pagefind ??= (await import(/* @vite-ignore */ PAGEFIND_PATH)) as typeof PagefindWebJs;
    await pf.pagefind.options({ baseUrl: '/' });

    pf.PagefindHighlight ??= (await import(/* @vite-ignore */ HIGHLIGHTER_PATH)).default;

    setInitialized(true);
  });

  return [initialized, pf] as const;
};
