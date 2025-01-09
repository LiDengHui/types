/**
 * 将类型 `T` 的所有属性及其嵌套属性递归地设为只读。
 *
 * 该工具类型会递归处理对象类型，确保所有属性都被设为 `readonly`。对于函数类型或非对象类型，保持原样，不做任何修改。
 *
 * ### 示例
 * ```ts
 * // 示例 1: 简单对象的只读化
 * type T1 = { a: number; b: string };
 * type ReadonlyT1 = DeepReadonly<T1>;
 * // 结果: { readonly a: number; readonly b: string }
 *
 * // 示例 2: 嵌套对象的只读化
 * type T2 = { a: { b: { c: number } }; d: string };
 * type ReadonlyT2 = DeepReadonly<T2>;
 * // 结果: { readonly a: { readonly b: { readonly c: number } }; readonly d: string }
 *
 * // 示例 3: 函数类型的处理
 * type T3 = () => void;
 * type ReadonlyT3 = DeepReadonly<T3>;
 * // 结果: () => void (保持原样)
 *
 * // 示例 4: 非对象类型的处理
 * type T4 = string;
 * type ReadonlyT4 = DeepReadonly<T4>;
 * // 结果: string (保持原样)
 * ```
 *
 * @typeParam T - 要递归设为只读的类型。
 */
export type DeepReadonly<T> = T extends Function
    ? T
    : T extends object
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T;
