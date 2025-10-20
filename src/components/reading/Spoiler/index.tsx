import clsx from 'clsx';
import { createSignal, type ParentProps } from 'solid-js';

import styles from './styles.module.css';

const Spoiler = ({ children, hide: initialHide = true }: ParentProps<{ hide?: boolean }>) => {
  const [hide, setHide] = createSignal(initialHide);

  return (
    <spoiler
      data-hide={hide()}
      class={clsx(styles.spoiler, !hide() && styles.visible)}
      title={hide() ? 'Spoiler - click to reveal' : undefined}
      onClick={(e) => {
        e.preventDefault();
        setHide((prev) => !prev);
      }}
      tabindex={0}
    >
      {children}
    </spoiler>
  );
};

export default Spoiler;
