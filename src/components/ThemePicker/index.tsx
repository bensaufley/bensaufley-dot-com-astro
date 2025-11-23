import CircleHalfTilt from '@phosphor-icons/core/fill/circle-half-tilt-fill.svg?component-solid';
import MoonStars from '@phosphor-icons/core/fill/moon-stars-fill.svg?component-solid';
import Sun from '@phosphor-icons/core/fill/sun-fill.svg?component-solid';
import clsx from 'clsx';
import { type ComponentProps, createEffect, createSignal } from 'solid-js';

import Tooltip from '~components/Tooltip';

import styles from './styles.module.css';

interface Props {
  context: 'header' | 'footer';
  invert?: boolean;
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

const tooltipProps: ComponentProps<typeof Tooltip>['tooltipProps'] = {
  group: 'themePicker',
  floatingOptions: {
    autoPlacement: {
      allowedPlacements: ['top', 'top-end', 'top-start', 'bottom', 'bottom-end', 'bottom-start'],
    },
  },
};

const ThemePicker = ({ context, invert = false }: Props) => (
  <div class={clsx(styles.themeToggle, styles[context])}>
    <Tooltip
      as="button"
      onClick={() => updateTheme('light')}
      class={styles.light}
      title="Use Light Theme"
      aria-label="Use Light Theme"
      content="Use Light Theme"
      type="button"
      invert={invert}
      tooltipProps={tooltipProps}
      zIndex={11}
    >
      <Sun />
    </Tooltip>
    <Tooltip
      as="button"
      onClick={() => updateTheme(null)}
      class={styles.system}
      title="Use System Theme"
      aria-label="Use System Theme"
      content="Use System Theme"
      type="button"
      invert={invert}
      tooltipProps={tooltipProps}
      zIndex={11}
    >
      <CircleHalfTilt />
    </Tooltip>
    <Tooltip
      as="button"
      onClick={() => updateTheme('dark')}
      class={styles.dark}
      title="Use Dark Theme"
      aria-label="Use Dark Theme"
      content="Use Dark Theme"
      type="button"
      invert={invert}
      tooltipProps={tooltipProps}
      zIndex={11}
    >
      <MoonStars />
    </Tooltip>
  </div>
);

export default ThemePicker;
