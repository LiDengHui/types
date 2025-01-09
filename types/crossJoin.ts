/**
 * 生成两个字符串集合 `A` 和 `B` 的笛卡尔积（Cross Join）。
 *
 * 该工具类型将两个字符串类型 `A` 和 `B` 的每个可能值进行组合，生成所有可能的连接字符串。
 *
 * ### 示例
 * ```ts
 * type Result = CrossJoin<'a' | 'b', '1' | '2'>;
 * // 结果：'a1' | 'a2' | 'b1' | 'b2'
 *
 * type EmptyA = CrossJoin<'', '1' | '2'>;
 * // 结果：''
 *
 * type EmptyB = CrossJoin<'a' | 'b', ''>;
 * // 结果：''
 * ```
 *
 * @typeParam A - 第一个字符串集合，类型为字符串字面量的联合类型，例如 `'a' | 'b'`。
 * @typeParam B - 第二个字符串集合，类型为字符串字面量的联合类型，例如 `'1' | '2'`。
 */
export type CrossJoin<A, B> = A extends '' ? '' : B extends '' ? '' : `${A & string}${B & string}`;
