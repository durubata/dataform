import React from 'react';
interface Opts {
    fallback: React.ReactNode;
}
declare type Unpromisify<T> = T extends Promise<infer P> ? P : never;
export declare const lazyLoad: <T extends Promise<any>, U extends React.ComponentType<any>>(importFunc: () => T, selectorFunc?: (s: Unpromisify<T>) => U, opts?: Opts) => (props: React.ComponentProps<U>) => JSX.Element;
export {};
