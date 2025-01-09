/**
 * 获取类型 `T` 中的唯一值，去除重复的类型。
 *
 * 该工具类型递归地遍历类型 `T`，并且通过 `Seen` 参数记录已经出现过的类型，从而去除重复的类型。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 去除重复的类型
 * type Unique1 = Unique<[1, 2, 2, 3, 3, 4]>;
 * // 结果: [1, 2, 3, 4]
 *
 * // 示例 2: 去除重复的类型（字符串）
 * type Unique2 = Unique<['a', 'b', 'b', 'c', 'a']>;
 * // 结果: ['a', 'b', 'c']
 *
 * // 示例 3: 对对象类型去重
 * type Unique3 = Unique<[1, '1', 1, 2, '2']>;
 * // 结果: [1, '1', 2, '2']
 * ```
 *
 * @typeParam T - 输入的类型，可能是联合类型或者数组类型。
 * @typeParam Seen - 递归过程中的历史类型记录，用于避免重复。
 */
export type Unique<T, Seen = never> = T extends T
    ? T extends Seen
        ? never
        : T | Unique<Exclude<T, T>, T | Seen>
    : never;
