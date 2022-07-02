import isMatch from '../object-utilities/isMatch';

/**
 * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for.
 * @example
 * const barney = { user: 'barney', age: 36, active: false };
 * const fred = { user: 'fred', age: 40, active: true };
 * const pebbles = { user: 'pebbles', age: 1, active: false };
 * const users = [barney, fred, pebbles];
 *
 * partitionedBy(users, o => o.age < 40);
 * // => [[barney, pebbles], [fred]]
 *
 * // The 'object is match' iteratee shorthand.
 * partitionedBy(users, { age: 1, active: false });
 * // => [[pebbles], [barney, fred]]
 *
 * // The '_.property' iteratee shorthand.
 * partitionedBy(users, 'active');
 * // => [[fred], [barney, pebbles]]
 */
export default function partitionedBy<T>(array: T[], predicate: ((arg: T, i: number) => boolean) | Partial<T> | keyof T): [T[], T[]] {
    const isTruthy = predicate instanceof Function ? predicate : (element: T) => isMatch(element, predicate);

    const result: [T[], T[]] = [[], []];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        result[+!isTruthy(item, i)].push(item);
    }

    return result;
}