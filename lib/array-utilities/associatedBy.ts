/**
 * Creates an object composed of keys and values generated from the results of running each element of collection through iteratee. The order of grouped values is determined by the order they occur in collection.
 * @example
 * const array = [ { dir: 'left', code: 97 }, { dir: 'right', code: 100 } ];
 * associatedBy(array, o => [o.dir, o.code]);
 * // => { 'left': 97, 'right': 100 }
 */
export default function associatedBy<T, K extends number | symbol | string | keyof T, V>(array: T[], transform: (arg: T) => [K, V]): Record<K, V> {
    const result = {} as Record<K, V>;

    for (const item of array) {
        const [key, value] = transform(item);
        result[key] = value;
    }

    return result;
}