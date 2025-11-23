import ImageSquareFill from '@phosphor-icons/core/fill/image-square-fill.svg?component-solid';
import clsx from 'clsx';
import { createMemo, type Signal, type VoidComponent } from 'solid-js';

import Tooltip from '~components/Tooltip';

import styles from './styles.module.css';

interface Props {
  showIcons: Signal<boolean>;
}

const Switch: VoidComponent<Props> = ({ showIcons: [showIcons, setShowIcons] }) => (
  <div class={styles.switch}>
    <Tooltip
      class={styles.switch}
      content={createMemo(() => `Show as ${showIcons() ? 'text' : 'icons'}`)}
      as="button"
      onClick={() => setShowIcons((prev) => !prev)}
      type="button"
    >
      <span class={clsx(!showIcons() && styles.selected)}>T</span>
      <span class={clsx(showIcons() && styles.selected)}>
        <ImageSquareFill />
      </span>
    </Tooltip>
  </div>
);

export default Switch;
