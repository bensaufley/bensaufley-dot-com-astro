import CircleFill from '@phosphor-icons/core/fill/circle-fill.svg?component-solid';
import Circle from '@phosphor-icons/core/regular/circle.svg?component-solid';
import CircleHalf from '@phosphor-icons/core/regular/circle-half.svg?component-solid';
import clsx from 'clsx';
import { createEffect, createSignal } from 'solid-js';

import styles from './styles.module.css';

interface Props {
  context: 'header' | 'footer';
}

const [theme, setTheme] = createSignal<'light' | 'dark' | null>(
  window.localStorage.getItem('theme') as 'light' | 'dark' | null,
);

createEffect(() => {
  document.body.classList.remove('light', 'dark');

  const t = theme();
  if (t) document.body.classList.add(t);
});

const updateTheme = (newTheme: 'light' | 'dark' | null) => {
  setTheme(newTheme);

  if (!newTheme) window.localStorage.removeItem('theme');
  else window.localStorage.setItem('theme', newTheme);
};

const ThemePicker = ({ context }: Props) => (
  <div class={clsx(styles.themeToggle, styles[context])}>
    <button
      onClick={() => updateTheme('light')}
      class={styles.light}
      title="Use Light Theme"
      aria-label="Use Light Theme"
      type="button"
    >
      <Circle />
    </button>
    <button
      onClick={() => updateTheme(null)}
      class={styles.system}
      title="Use System Theme"
      aria-label="Use System Theme"
      type="button"
    >
      <CircleHalf />
    </button>
    <button
      onClick={() => updateTheme('dark')}
      class={styles.dark}
      title="Use Dark Theme"
      aria-label="Use Dark Theme"
      type="button"
    >
      <CircleFill />
    </button>
  </div>
);

export default ThemePicker;
