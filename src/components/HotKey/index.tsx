import ShiftKey from '@phosphor-icons/core/regular/arrow-fat-up.svg?component-solid';
import AltKey from '@phosphor-icons/core/regular/option.svg?component-solid';
import clsx, { type ClassValue } from 'clsx';
import { For, Match, Show, Switch, type VoidComponent } from 'solid-js';
import { effect } from 'solid-js/web';

import Tooltip from '~components/Tooltip';

import MetaKey from './MetaKey';

import styles from './styles.module.css';

export const Meta = Symbol('meta');
export const Shift = Symbol('shift');
export const Alt = Symbol('alt');

interface Props {
  class?: ClassValue;
  combo: Array<string | typeof Meta | typeof Shift | typeof Alt>;
  description?: string;
  handler?: () => void;
}

const Combo = ({ keys }: { keys: Props['combo'] }) => (
  <For each={keys}>
    {(key) => (
      <kbd class={clsx(key === ' ' && styles.space)}>
        <Switch fallback={key as string}>
          <Match when={key === Meta}>
            <MetaKey />
          </Match>
          <Match when={key === Shift}>
            <ShiftKey />
          </Match>
          <Match when={key === Alt}>
            <AltKey />
          </Match>
        </Switch>
      </kbd>
    )}
  </For>
);

const HotKey: VoidComponent<Props> = ({ class: className, combo, description, handler }) => {
  effect(() => {
    if (!handler) return undefined;

    const onKeyDown = (e: KeyboardEvent) => {
      if (combo.includes(Meta) !== (e.metaKey || e.ctrlKey)) return;
      if (combo.includes(Shift) !== e.shiftKey) return;
      if (combo.includes(Alt) !== e.altKey) return;

      if (e.key.toLocaleLowerCase() !== combo.find((k) => typeof k === 'string')?.toLocaleLowerCase()) {
        return;
      }

      e.preventDefault();
      handler();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <div class={clsx(styles.hotKey, className)}>
      <Show when={description} fallback={<Combo keys={combo} />}>
        <Tooltip content={description!}>
          <Combo keys={combo} />
        </Tooltip>
      </Show>
    </div>
  );
};

export default HotKey;
