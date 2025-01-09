/**
 * 根据值类型 `U` 筛选对象 `T` 中的键，返回符合条件的键的联合类型。
 *
 * 该工具类型会遍历对象 `T` 的键，如果某个键对应的值类型 `T[K]` 可分配给类型 `U`，则保留该键；否则将其排除。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 简单筛选
 * type T1 = { a: number; b: string; c: boolean };
 * type Keys1 = FilterKeys<T1, string>;
 * // 结果: "b"
 *
 * // 示例 2: 筛选多种类型
 * type T2 = { a: number; b: string; c: boolean; d: number | string };
 * type Keys2 = FilterKeys<T2, number | string>;
 * // 结果: "a" | "b" | "d"
 *
 * // 示例 3: 无匹配键
 * type T3 = { a: number; b: boolean };
 * type Keys3 = FilterKeys<T3, string>;
 * // 结果: never
 *
 * // 示例 4: 与 `Pick` 结合使用
 * type T4 = { a: number; b: string; c: boolean };
 * type FilteredObject = Pick<T4, FilterKeys<T4, number>>;
 * // 结果: { a: number }
 * ```
 *
 * @typeParam T - 要筛选的对象类型。
 * @typeParam U - 用于筛选的值类型。
 */
export type FilterKeys<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
