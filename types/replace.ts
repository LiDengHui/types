/**
 * 替换字符串类型 `T` 中的所有子字符串 `S` 为新的子字符串 `M`。
 *
 * 该工具类型递归地检查字符串类型 `T` 是否包含子字符串 `S`，如果包含，则将其替换为 `M`，并继续替换剩余部分。直到字符串类型中的所有匹配项都被替换为 `M`。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 替换字符串中的子字符串
 * type Replaced1 = Replace<"hello world", "world", "everyone">;
 * // 结果: "hello everyone"
 *
 * // 示例 2: 替换多次出现的子字符串
 * type Replaced2 = Replace<"hello hello hello", "hello", "hi">;
 * // 结果: "hi hi hi"
 *
 * // 示例 3: 子字符串不在目标字符串中
 * type Replaced3 = Replace<"goodbye world", "earth", "everyone">;
 * // 结果: "goodbye world"  // 没有匹配的子字符串
 * ```
 *
 * @typeParam T - 要替换的目标字符串类型。
 * @typeParam S - 需要替换的子字符串类型。
 * @typeParam M - 用于替换的新子字符串类型。
 */
export type Replace<T extends string, S extends string, M extends string> = T extends '' ? '' : T extends `${infer A}${S}${infer B}` ? `${A}${M}${Replace<B, S, M>}` : T;
