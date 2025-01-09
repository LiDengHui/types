/**
 * 获取对象类型 `T` 中所有属性值的联合类型。
 *
 * 该工具类型遍历对象类型 `T` 的所有属性，并生成这些属性值的联合类型。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 从对象中获取值的联合类型
 * type ValueOf1 = ValueOf<{ a: 1, b: '2', c: boolean }>;
 * // 结果: 1 | '2' | boolean
 *
 * // 示例 2: 获取更复杂对象类型的值的联合类型
 * type ValueOf2 = ValueOf<{ x: { name: string }, y: number }>;
 * // 结果: { name: string } | number
 * ```
 *
 * @typeParam T - 输入的对象类型。
 */
export type ValueOf<T> = {
    [K in keyof T]: T[K];
}[keyof T];
