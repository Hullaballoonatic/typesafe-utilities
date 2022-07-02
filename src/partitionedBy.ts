// TODO: add matches to partitioned

/**
 * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).
 * @param array The array to partition
 * @param predicate The function invoked per element.
 * @returns the array of grouped elements.
 * @example
 * const users = [
 *  { user: 'barney', age: 36, active: false },
 *  { user: 'fred', age: 40, active: true },
 *  { user: 'pebbles', age: 1, active: false },
 * ];
 *
 * partitionedBy(users, o => o.age < 40);
 * // => objects for [['barney', 'pebbles'], ['fred']]
 *
 * partitionedBy(users, 'active');
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */
export default function partitionedBy<T>(array: T[], predicate: ((arg: T, i: number) => boolean) | keyof T): [T[], T[]] {
    const result: [T[], T[]] = [[], []];

    const iteratee = typeof predicate === 'function' ? predicate : (o: T) => !!o[predicate];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const index = +!iteratee(item, i);
        result[index].push(item);
    }

    return result;
}