/**
 * 生成字符串类型 `T` 的所有排列的基础实现。
 *
 * 该工具类型递归地生成给定字符串类型 `T` 的所有字符排列，使用 `K` 作为当前排列的基准，并通过排除已使用的字符生成新的排列。
 *
 * ### 示例
 * ```ts
 * // 示例 1: "abc" 的排列
 * type PermutationABC = PermutationBase<"a"｜"b"｜"c">;
 * // 结果: "abc" | "acb" | "bac" | "bca" | "cab" | "cba"
 * ```
 *
 * @typeParam T - 要排列的字符联合类型。
 * @typeParam K - 当前排列的基准（默认为 `T`）。
 */
export type PermutationBase<T, K = T> = [T] extends [never] ? '' : K extends K ? `${K & string}${PermutationBase<Exclude<T, K>>}` : never;

/**
 * 提取字符串类型 `T` 的每个字符作为单独的联合类型。
 *
 * 该工具类型递归地分解字符串类型 `T`，将其拆分为单独的字符，并返回这些字符的联合类型。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 拆分 "abc"
 * type FResult = F<"abc">;
 * // 结果: "a" | "b" | "c"
 * ```
 *
 * @typeParam T - 要拆分的字符串类型。
 */
export type F<T> = T extends `${infer A}${infer Other}` ? A | F<Other> : never;

/**
 * 生成字符串类型 `T` 的所有排列。
 *
 * 使用 `PermutationBase` 和 `F` 工具类型，生成给定字符串类型 `T` 中字符的所有排列。
 *
 * ### 示例
 * ```ts
 * // 示例 1: "abc" 的排列
 * type PermutationABC = Permutation<"abc">;
 * // 结果: "abc" | "acb" | "bac" | "bca" | "cab" | "cba"
 * ```
 *
 * @typeParam T - 要排列的字符串类型。
 */
export type Permutation<T extends string> = PermutationBase<F<T>>;
