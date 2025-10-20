export {};

declare module 'solid-js' {
  // eslint-disable-next-line import/prefer-default-export
  export namespace JSX {
    interface IntrinsicElements {
      spoiler: HTMLAttributes<HTMLElement>;
    }
  }
}
