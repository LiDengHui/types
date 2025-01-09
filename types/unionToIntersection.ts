/**
 * 将联合类型 `U` 转换为交集类型。
 *
 * 这个类型的作用是将一个联合类型转换为交集类型，常用于将联合类型中的每个成员都合并为一个单一类型。
 *
 * ### 示例
 * ```ts
 * type A = UnionToIntersection<{ a: number } | { b: string }>;
 * // 结果：{ a: number } & { b: string }
 * ```
 *
 * 该类型通过以下方式工作：
 * - 它通过条件类型 `(U extends any ? (x: U) => void : never)` 来推导出每个联合成员的类型 `U`。
 * - 然后使用 `infer` 关键字来提取每个成员的交集类型 `I`，并最终返回 `I` 类型。
 */
export type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (x: infer I) => void ? I : never;
