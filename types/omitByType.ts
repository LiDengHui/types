/**
 * 从对象类型 `T` 中剔除值类型为 `U` 的键，返回一个新对象类型。
 *
 * 该工具类型会遍历对象 `T` 的所有键，如果某个键的值类型 `T[K]` 可以分配给类型 `U`，则从结果对象中移除该键；否则保留该键及其值类型。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 基础类型剔除
 * type T1 = { a: string; b: number; c: boolean; d: string };
 * type Result1 = OmitByType<T1, string>;
 * // 结果: { b: number; c: boolean }
 *
 * // 示例 2: 联合类型匹配
 * type T2 = { a: string | number; b: boolean; c: number };
 * type Result2 = OmitByType<T2, number>;
 * // 结果: { a: string | number; b: boolean }
 *
 * // 示例 3: 无匹配键
 * type T3 = { a: string; b: boolean };
 * type Result3 = OmitByType<T3, number>;
 * // 结果: { a: string; b: boolean }
 *
 * // 示例 4: 与其他工具类型结合
 * type T4 = { a: number; b: string; c: boolean };
 * type RemainingKeys = keyof OmitByType<T4, boolean>;
 * // 结果: "a" | "b"
 * ```
 *
 * @typeParam T - 要操作的对象类型。
 * @typeParam U - 用于剔除的值类型。
 */
export type OmitByType<T, U> = {
    [K in keyof T as T[K] extends U ? never : K]: T[K];
};
