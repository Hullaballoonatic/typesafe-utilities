/**
 * Returns `true` if all the keys of `source` are present in `object`; otherwise, `false`.
 * @example
 * isPartial({ a: 1, b: 2 }, { b: 3 });
 * // => true
 */
// eslint-disable-next-line
export default function isPartial<T>(object: T, source: any): source is Partial<T> {
    const objectKeys = new Set(Object.keys(object));

    return Object.keys(source).every(key => objectKeys.has(key));
}