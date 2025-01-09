/**
 * 解包 `Promise` 类型，递归获取最终解析后的值的类型。
 *
 * 该工具类型会检查类型 `T` 是否是 `Promise`，如果是，则提取其内部的解析值类型，并递归展开，直到获取非 `Promise` 类型的最终值类型。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 解包简单 Promise
 * type Result1 = DeepPromiseValueType<Promise<string>>;
 * // 结果: string
 *
 * // 示例 2: 解包嵌套 Promise
 * type Result2 = DeepPromiseValueType<Promise<Promise<number>>>;
 * // 结果: number
 *
 * // 示例 3: 解包混合类型
 * type Result3 = DeepPromiseValueType<Promise<Promise<Promise<{ a: number }>>>>;
 * // 结果: { a: number }
 *
 * // 示例 4: 非 Promise 类型
 * type Result4 = DeepPromiseValueType<number>;
 * // 结果: number
 * ```
 *
 * @typeParam T - 要解包的类型，通常是一个 `Promise` 或嵌套的 `Promise`。
 */
export type DeepPromiseValueType<T> = T extends Promise<infer x> ? DeepPromiseValueType<x> : T;
