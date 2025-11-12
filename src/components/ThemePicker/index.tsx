import CircleHalfTilt from '@phosphor-icons/core/fill/circle-half-tilt-fill.svg?component-solid';
import MoonStars from '@phosphor-icons/core/fill/moon-stars-fill.svg?component-solid';
import Sun from '@phosphor-icons/core/fill/sun-fill.svg?component-solid';
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
  document.documentElement.classList.remove('light', 'dark');

  const t = theme();
  if (t) document.documentElement.classList.add(t);
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
      <Sun />
    </button>
    <button
      onClick={() => updateTheme(null)}
      class={styles.system}
      title="Use System Theme"
      aria-label="Use System Theme"
      type="button"
    >
      <CircleHalfTilt />
    </button>
    <button
      onClick={() => updateTheme('dark')}
      class={styles.dark}
      title="Use Dark Theme"
      aria-label="Use Dark Theme"
      type="button"
    >
      <MoonStars />
    </button>
  </div>
);

export default ThemePicker;
