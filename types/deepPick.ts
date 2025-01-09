/**
 * 从类型 `T` 中提取与字符串路径 `S` 对应的深层嵌套属性。
 *
 * 该工具类型支持通过点分隔字符串路径提取嵌套对象的属性类型。
 * 如果路径无效（某级路径不存在于对象中），返回 `never`。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 提取简单路径
 * type T = { a: { b: { c: number } }, d: string };
 * type Result1 = DeepPick<T, 'a.b.c'>;
 * // 结果: number
 *
 * // 示例 2: 提取顶层属性
 * type Result2 = DeepPick<T, 'd'>;
 * // 结果: string
 *
 * // 示例 3: 提取不存在的路径
 * type Result3 = DeepPick<T, 'a.x'>;
 * // 结果: never
 *
 * // 示例 4: 包装非对象值为单属性对象
 * type Result4 = DeepPick<T, 'd'>;
 * // 结果: { d: string }
 * ```
 *
 * @typeParam T - 要从中提取属性的对象类型。
 * @typeParam S - 用点分隔的路径字符串，例如 `'a.b.c'`。
 */
export type DeepPick<T, S extends string> = S extends `${infer A}.${infer B}` ? (A extends keyof T ? DeepPick<T[A], B> : never) : S extends keyof T ? (T[S] extends object ? T[S] : { [key in S]: T[S] }) : never;
