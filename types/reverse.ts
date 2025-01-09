/**
 * 反转数组类型 `T`。
 *
 * 该工具类型递归地反转一个数组类型 `T`，通过将数组的第一个元素与其余部分交换位置，从而实现数组的反转。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 反转一个数字数组
 * type Reversed1 = Reverse<[1, 2, 3]>;
 * // 结果: [3, 2, 1]
 *
 * // 示例 2: 反转一个字符串数组
 * type Reversed2 = Reverse<['a', 'b', 'c']>;
 * // 结果: ['c', 'b', 'a']
 *
 * // 示例 3: 反转一个空数组
 * type Reversed3 = Reverse<[]>;
 * // 结果: []
 * ```
 *
 * @typeParam T - 要反转的数组类型。
 */
export type Reverse<T extends unknown[]> = T extends [infer A, ...infer Other] ? [...Reverse<Other>, A] : [];
