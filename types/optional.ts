/**
 * 可选属性
 * @description 用于将指定的属性变成可选的
 * @param T 原对象类型
 * @param K 需要变成可选的属性
 * @returns 新对象类型
 * @example
 * interface User {
 *     name: string;
 *     age: number;
 *     hobbies: string;
 * }
 * type CreateUser = Optional<User, 'hobbies'>;
 * const user: CreateUser = {
 *     name: '123',
 *     age: 123,
 * };
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
