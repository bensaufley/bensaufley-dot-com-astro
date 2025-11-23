export {};

declare module 'solid-js' {
  // eslint-disable-next-line import/prefer-default-export
  export namespace JSX {
    interface IntrinsicElements {
      spoiler: HTMLAttributes<HTMLElement>;
    }

    interface IntrinsicAttributes {
      'client:load'?: boolean;
      'client:only'?: string;
      'client:idle'?: boolean;
      'client:visible'?: { rootMargin?: string };
      slot?: 'fallback';
    }
  }
}

declare global {
  interface ArrayConstructor {
    isArray(arg: any): arg is readonly any[];
  }
}
