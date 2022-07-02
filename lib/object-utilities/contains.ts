/**
 * Returns `true` if all the key-values of `source` are present in `object`; otherwise `false`.
 * @example
 * const object = { a: 1, b: 2 };
 *
 * contains(object, { a: 1 });
 * // => true
 *
 * contains(object, { a: 2 });
 * // => false
 */
export default function contains<T>(object: T, source: Partial<T>): boolean {
    return Object.keys(source).map((key) => key as keyof T).every((key: keyof T) => object[key] === source[key]);
}