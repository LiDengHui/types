/**
 * 深度合并两个对象类型 `T` 和 `U`。
 *
 * 该工具类型会递归地合并对象 `T` 和 `U` 的键。如果某个键在两个对象中都存在，并且它们的值也是对象，则递归合并它们的值。
 * 如果某个键只存在于其中一个对象，则直接使用该对象的键值。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 简单对象合并
 * type A = { a: number; b: string };
 * type B = { b: number; c: boolean };
 * type Result = DeepMerge<A, B>;
 * // 结果: { a: number; b: number; c: boolean }
 *
 * // 示例 2: 嵌套对象合并
 * type A = { a: { x: number }; b: string };
 * type B = { a: { y: boolean }; c: boolean };
 * type Result = DeepMerge<A, B>;
 * // 结果: { a: { x: number; y: boolean }; b: string; c: boolean }
 *
 * // 示例 3: 非对象值的合并
 * type A = { a: number };
 * type B = string;
 * type Result = DeepMerge<A, B>;
 * // 结果: string
 * ```
 *
 * @typeParam T - 第一个对象类型。
 * @typeParam U - 第二个对象类型。
 */
export type DeepMerge<T, U> = T extends object
    ? U extends object
        ? {
              [K in keyof T | keyof U]: K extends keyof T ? (K extends keyof U ? DeepMerge<T[K], U[K]> : T[K]) : K extends keyof U ? U[K] : never;
          }
        : U
    : U;
