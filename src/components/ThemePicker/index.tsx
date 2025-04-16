import CircleFill from '@phosphor-icons/core/fill/circle-fill.svg?react';
import Circle from '@phosphor-icons/core/regular/circle.svg?react';
import CircleHalf from '@phosphor-icons/core/regular/circle-half.svg?react';
import { effect, signal } from '@preact/signals';
import clsx from 'clsx';

import styles from './styles.module.css';

interface Props {
  context: 'header' | 'footer';
}

const theme = signal<'light' | 'dark' | null>(window.localStorage.getItem('theme') as 'light' | 'dark' | null);

effect(() => {
  document.body.classList.remove('light', 'dark');
  if (theme.value) document.body.classList.add(theme.value);
});

const updateTheme = (newTheme: 'light' | 'dark' | null) => {
  theme.value = newTheme;

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
