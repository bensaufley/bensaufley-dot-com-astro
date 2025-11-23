/* eslint-disable no-redeclare, prefer-arrow-functions/prefer-arrow-functions */
import Tt from '@corvu/tooltip';
import { type ClassValue, clsx } from 'clsx';
import type { Accessor, ComponentProps, JSX, ParentComponent } from 'solid-js';

import styles from './styles.module.css';

interface Props {
  content: JSX.Element | Accessor<JSX.Element>;
  children: JSX.Element;
  tooltipProps?: Omit<ComponentProps<typeof Tt>, 'children'>;
  anchorClass?: ClassValue;
  invert?: boolean;
  zIndex?: number;
}

export default function Tooltip(
  props: Props & { as?: 'div' } & Omit<JSX.IntrinsicElements['div'], 'as' | keyof Props>,
): JSX.Element;
export default function Tooltip<C extends ParentComponent<P>, P extends Record<string, any>>(
  props: Props & { as: C } & Omit<P, 'as' | keyof Props>,
): JSX.Element;
export default function Tooltip<E extends keyof JSX.IntrinsicElements>(
  props: Props & { as: E } & Omit<JSX.IntrinsicElements[E], 'as' | keyof Props>,
): JSX.Element;
export default function Tooltip({
  as = 'div',
  children,
  content,
  anchorClass,
  invert,
  tooltipProps = {},
  zIndex,
  ...rest
}: Props & { as?: keyof JSX.IntrinsicElements | ParentComponent<any> } & Record<string, any>): JSX.Element {
  return (
    <Tt
      openDelay={0}
      closeDelay={0}
      floatingOptions={{
        autoPlacement: true,
        offset: 10,
        ...tooltipProps.floatingOptions,
      }}
      {...tooltipProps}
    >
      <Tt.Anchor class={clsx(anchorClass)}>
        <Tt.Trigger as={as} {...rest}>
          {children}
        </Tt.Trigger>
      </Tt.Anchor>
      <Tt.Portal>
        <Tt.Content class={clsx(styles.tooltipContent, invert && styles.invert)} style={{ 'z-index': zIndex }}>
          {typeof content === 'function' ? content() : content}
          <Tt.Arrow class={styles.tooltipArrow} />
        </Tt.Content>
      </Tt.Portal>
    </Tt>
  );
}
