/**
 * 生成字符串类型 `S` 的所有字符组合。
 *
 * 这个工具类型的作用是基于输入字符串 `S`，递归地生成所有可能的字符组合，包括子序列和排列。
 *
 * ### 示例
 * ```ts
 * type Combinations = AllCombinations<'abc'>;
 * // 结果：
 * // '' | 'a' | 'b' | 'c' | 'ab' | 'ac' | 'bc' | 'abc'
 * ```
 *
 * @typeParam S - 输入的字符串类型，例如 `'abc'`。
 * @typeParam Prefix - 用于构建组合的前缀，默认为空字符串 `''`，在递归过程中逐步构建。
 */
export type AllCombinations<S extends string, Prefix extends string = ''> = S extends `${infer First}${infer Other}` ? AllCombinations<Other, Prefix> | AllCombinations<Other, `${Prefix}${First}`> : Prefix;
