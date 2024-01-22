import { effect, signal } from '@preact/signals';
import Circle from 'bootstrap-icons/icons/circle.svg?react';
import CircleFill from 'bootstrap-icons/icons/circle-fill.svg?react';
import CircleHalf from 'bootstrap-icons/icons/circle-half.svg?react';
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
    <button onClick={() => updateTheme('light')} class={styles.light} title="Use Light Theme">
      <Circle />
    </button>
    <button onClick={() => updateTheme(null)} class={styles.system} title="Use System Theme">
      <CircleHalf />
    </button>
    <button onClick={() => updateTheme('dark')} class={styles.dark} title="Use Dark Theme">
      <CircleFill />
    </button>
  </div>
);

export default ThemePicker;
