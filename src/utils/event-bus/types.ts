export type Callback = <T>(...args: T[]) => void;
export type Listeners = Record<string, Callback[]>;
