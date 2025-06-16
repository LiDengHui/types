export type FunctionKeysObject<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : never;
};

export type FunctionMapType<F extends Object> = <T extends keyof FunctionKeysObject<F>>(
    key: T,
    ...args: F[T] extends ((...args: infer P) => any) ? P : never[]
) => void;

// interface EventFunctions {
//     a(): void;
//
//     b(params: { c: string; d: number }): void;
// }
//
// declare const emit: FunctionMapType<EventFunctions>;
// emit('a'); // 正确
// emit('b', { c: '123', d: 123 }); // 正确
