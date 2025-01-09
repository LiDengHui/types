/**
 * 获取字符串类型 `T` 的所有子序列。
 *
 * 子序列是由原字符串的字符组成的一个字符串，字符顺序保持一致，但不需要是连续的。
 * 该工具类型递归地生成所有可能的子序列，包括空字符串和字符串本身。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 获取字符串的所有子序列
 * type Subsequences1 = Subsequences<"abc">;
 * // 结果: '' | 'a' | 'b' | 'c' | 'ab' | 'ac' | 'bc' | 'abc'
 *
 * // 示例 2: 获取更长字符串的所有子序列
 * type Subsequences2 = Subsequences<"abcd">;
 * // 结果: '' | 'a' | 'b' | 'c' | 'd' | 'ab' | 'ac' | 'ad' | 'bc' | 'bd' | 'cd' | 'abc' | 'abd' | 'acd' | 'bcd' | 'abcd'
 * ```
 *
 * @typeParam T - 输入的字符串类型。
 */
export type Subsequences<T extends string> = T extends ''
    ? ''
    : T extends `${infer A}${infer Other}`
      ? `${A}${Subsequences<Other>}` | Subsequences<Other>
      : never;
