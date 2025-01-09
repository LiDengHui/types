# @dhlx/types

A collection of useful TypeScript utility types to enhance your type system experience. These types cover various scenarios such as deep merging, value extraction, permutations, and more. You can easily import them for better type manipulation in your projects.

## Installation

You can install the package via npm or yarn:

```bash
npm install @dhlx/types
# or
yarn add @dhlx/types
```

## Exported Types

This package includes the following utility types:

### `UnionToIntersection<U>`

Converts a union type into an intersection type.

```ts
type Result = UnionToIntersection<{ a: string } | { b: number }>;
// Result: { a: string } & { b: number }
```

### `AllCombinations<S extends string>`

Generates all possible combinations of characters from a string.

```ts
type Result = AllCombinations<'abc'>;
// Result: '' | 'a' | 'b' | 'c' | 'ab' | 'ac' | 'bc' | 'abc'
```

### `CrossJoin<A, B>`

Combines two string types `A` and `B` into a single string type by concatenating them.

```ts
type Result = CrossJoin<'a', 'b'>;
// Result: 'ab'
```

### `Flatten<T, Prefix extends string = ''>`

Flattens a nested object type into a single level, with keys as dot-notation paths.

```ts
type Result = Flatten<{ a: { b: { c: number } } }>;
// Result: { 'a.b.c': number }
```

### `DeepMerge<T, U>`

Deeply merges two types `T` and `U`, merging nested objects recursively.

```ts
type Result = DeepMerge<{ a: { b: number } }, { a: { c: string } }>;
// Result: { a: { b: number, c: string } }
```

### `DeepPromiseValueType<T>`

Extracts the resolved value type of a `Promise`, recursively resolving nested promises.

```ts
type Result = DeepPromiseValueType<Promise<Promise<number>>>;
// Result: number
```

### `Replace<T extends string, S extends string, M extends string>`

Replaces all occurrences of a substring `S` in a string `T` with the string `M`.

```ts
type Result = Replace<'hello world', 'world', 'everyone'>;
// Result: 'hello everyone'
```

### `Unique<T>`

Extracts unique values from a union type, removing duplicates.

```ts
type Result = Unique<[1, 2, 2, 3, 3, 4]>;
// Result: [1, 2, 3, 4]
```

### `DeepPick<T, S extends string>`

Recursively picks properties from a nested object type, based on a dot-notation string path.

```ts
type Result = DeepPick<{ a: { b: { c: number } } }, 'a.b.c'>;
// Result: { c: number }
```

### `DeepReadonly<T>`

Makes all properties of a type `T` and its nested properties `readonly`.

```ts
type Result = DeepReadonly<{ a: { b: number } }>;
// Result: { readonly a: { readonly b: number } }
```

### `FilterKeys<T, U>`

Filters the keys of an object `T` where the corresponding value type extends `U`.

```ts
type Result = FilterKeys<{ a: number, b: string, c: boolean }, string>;
// Result: 'b'
```

### `OmitByType<T, U>`

Omit the properties of an object `T` that have a value type extending `U`.

```ts
type Result = OmitByType<{ a: number, b: string, c: boolean }, string>;
// Result: { a: number, c: boolean }
```

### `Permutation<T extends string>`

Generates all possible permutations of a string `T`.

```ts
type Result = Permutation<'abc'>;
// Result: 'abc' | 'acb' | 'bac' | 'bca' | 'cab' | 'cba'
```

### `Reverse<T extends unknown[]>`

Reverses a tuple or array type `T`.

```ts
type Result = Reverse<[1, 2, 3]>;
// Result: [3, 2, 1]
```

### `Subsequences<T extends string>`

Generates all subsequences of a string `T`.

```ts
type Result = Subsequences<'abc'>;
// Result: '' | 'a' | 'b' | 'c' | 'ab' | 'ac' | 'bc' | 'abc'
```

### `Unique<T>`

Ensures that the values of a union type `T` are unique.

```ts
type Result = Unique<[1, 'a', 2, 'b', 1]>;
// Result: [1, 'a', 2, 'b']
```

## Usage Example

```ts
import { UnionToIntersection, AllCombinations, DeepMerge } from 'typescript-utils';

type Result = UnionToIntersection<{ a: string } | { b: number }>;
// Result: { a: string } & { b: number }

type Combos = AllCombinations<'abc'>;
// Combos: '' | 'a' | 'b' | 'c' | 'ab' | 'ac' | 'bc' | 'abc'

type Merged = DeepMerge<{ a: { b: number } }, { a: { c: string } }>;
// Merged: { a: { b: number, c: string } }
```

## License

MIT License. See [LICENSE](LICENSE) for more information.
```

