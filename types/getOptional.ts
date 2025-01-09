// 定义一个工具类型 GetOptional，用于提取对象类型 T 中所有可选属性
export type GetOptional<T extends object> = {
    // 遍历对象 T 的所有键 K
    [K in keyof T as T[K] extends Required<T>[K]
        ? never // 该键是必选属性，丢弃
        : K]: T[K]; // 条件类型判断：如果 T[K] 是必选属性，则过滤掉（映射为 never） // 该键是可选属性，保留 // 保留可选属性的值类型
};

/*
  关键点解释：
  1. `keyof T`：获取对象 T 的所有键的联合类型。
  2. `as`：在映射类型中，用来对键进行重新映射。
     - 如果某个键被映射为 `never`，它会从结果中被移除。
  3. `Required<T>`：将对象 T 的所有属性变为必选属性。
     - 通过比较 `T[K]` 和 `Required<T>[K]` 来判断某属性是否为可选属性。
  4. 可选属性的键会被保留在结果类型中。
*/
