/**
 * Returns the value of field of nested objects by the given path
 * @example
 * // base case
 * traverse({ a: 'foo' }, 'a');
 * // => 'foo'
 *
 * nested-object
 * traverse({ a: { b: 'bar' } }, 'a.b');
 * // => 'bar'
 */
export default function traverse(object: Record<string, unknown>, path: string | string[], separator = '.'): unknown {
    const fields = Array.isArray(path) ? path : path.split(separator);

    return fields.reduce((acc, part) => acc?.[part] as Record<string, unknown>, object);
}