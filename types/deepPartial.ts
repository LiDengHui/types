// DeepPartial 工具类型：将一个对象类型 T 的所有属性及其嵌套属性变为可选
export type DeepPartial<T> = T extends object
    ? {
          // 遍历 T 对象的每个属性 K
          [K in keyof T]?: DeepPartial<T[K]>; // 如果该属性的值是对象类型，递归地将该属性的值也变为可选属性
      }
    : T; // 如果 T 不是对象类型，直接返回 T

/*
  关键点解析：
  1. `T extends object`：首先检查 T 是否为对象类型（非原始类型，如 string, number, boolean 等）。
  2. 如果 T 是对象类型：
     - 遍历对象的每个属性 K，使用 `[K in keyof T]`。
     - 对于每个属性，使用 `DeepPartial<T[K]>` 递归地将属性值的类型变为可选。
  3. `?`：表示每个属性变为可选属性。
  4. 如果 T 不是对象类型（如原始类型），直接返回原类型 T（不做任何更改）。
*/
