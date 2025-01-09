/**
 * 将嵌套对象类型 `T` 展平为一个平面对象类型，键名通过点号 `.` 拼接嵌套路径。
 *
 * 该工具类型会递归处理嵌套对象，将所有嵌套属性的路径作为键名，保留其对应的值类型。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 简单嵌套对象
 * type T1 = { a: number; b: { c: string; d: boolean } };
 * type FlattenedT1 = Flatten<T1>;
 * // 结果: { "a": number; "b.c": string; "b.d": boolean }
 *
 * // 示例 2: 多层嵌套对象
 * type T2 = { a: { b: { c: number } }; d: string };
 * type FlattenedT2 = Flatten<T2>;
 * // 结果: { "a.b.c": number; "d": string }
 *
 * // 示例 3: 空对象
 * type T3 = {};
 * type FlattenedT3 = Flatten<T3>;
 * // 结果: {}
 * ```
 *
 * @typeParam T - 要展平的嵌套对象类型。
 * @typeParam Prefix - 内部使用，用于拼接键名前缀。
 */
export type Flatten<T, Prefix extends string = ''> = {
    [K in keyof T]: T[K] extends object
        ? Flatten<T[K], `${Prefix}${K & string}.`>
        : { [P in `${Prefix}${K & string}`]: T[K] };
}[keyof T];
