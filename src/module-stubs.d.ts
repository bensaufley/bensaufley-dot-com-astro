declare module '*.svg' {
  const url: string;
  export default url;
}

declare module '*.svg?react' {
  import type { ComponentType, JSX } from 'preact';

  const Component: ComponentType<JSX.SVGAttributes>;
  export default Component;
}
