declare module '*.svg' {
  const url: string;
  export default url;
}

declare module '*.svg?react' {
  import type { ComponentType, JSX } from 'preact';

  const Component: ComponentType<JSX.SVGAttributes>;
  export default Component;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const url: string;
  export default url;
}
