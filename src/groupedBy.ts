import {Key} from './Key';

/**
 * Creates an object composed of keys generated from the results of running each element of collection through iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).
 * @param array The collection to iterate over
 * @param keySelector The iteratee to transform the keys.
 * @returns the composed aggregate object
 * @example
 * groupedBy([6.1, 4.2, 6.3], Math.floor);
 * // => { 4: [4.2], 6: [6.1, 6.3] }
 *
 * groupedBy(['one', 'two', 'three'], 'length');
 * // => { 3: ['one', 'two'], 5: ['three'] }
 */
export default function groupedBy<T, K extends Key>(array: T[], keySelector: ((arg: T, i: number) => K) | keyof T): Record<K, T[]> {
    const result = {} as Record<K, T[]>;

    const iteratee = typeof keySelector === 'function' ? keySelector : (o: T) => o[keySelector];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const key = iteratee(item, i) as K;
        result[key] = result[key] || [];
        result[key].push(item);
    }

    return result;
}