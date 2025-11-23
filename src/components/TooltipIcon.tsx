import type { RootProps as TooltipRootProps } from '@corvu/tooltip';
import { type ClassValue, clsx } from 'clsx';
import type { JSX, ParentComponent, VoidComponent } from 'solid-js';

import Tooltip from './Tooltip';

type Props = {
  class?: ClassValue;
  icon: VoidComponent<JSX.SvgSVGAttributes<SVGSVGElement>>;
  invert?: boolean;
  tooltipProps?: Omit<TooltipRootProps, 'children'>;
  zIndex?: number;
} & (
  | {
      href: string;
      onClick?: never;
    }
  | {
      href?: never;
      onClick: (event: MouseEvent) => void;
    }
);

const TooltipIcon: ParentComponent<Props> = ({
  class: className,
  href,
  icon: Icon,
  invert = false,
  onClick,
  children,
  tooltipProps = {},
  zIndex,
}) => (
  <Tooltip
    invert={invert}
    class={clsx(className)}
    content={children}
    as={href ? 'a' : 'button'}
    {...(href
      ? { href, ...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
      : { onClick })}
    tooltipProps={tooltipProps}
    zIndex={zIndex}
  >
    <Icon />
  </Tooltip>
);

export default TooltipIcon;
