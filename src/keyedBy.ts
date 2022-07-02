import Key from './Key';

/**
 * Creates a Record object composed of keys generated from the results of running each element of collection through keySelector. The corresponding value of each key is the last element responsible for generating the key. The keySelector is invoked with one argument: (value).
 * @param array The collection to iterate over
 * @param keySelector The iteratee to transform the keys.
 * @returns the composed aggregate object
 * @example
 * const array = [
 *   { dir: 'left', code: 97 },
 *   { dir: 'right', code: 100 },
 * ];
 *
 * keyedBy(array, o => String.fromCharCode(o.code));
 * // => { 'a': { dir: 'left', code: 97 }, 'b': { dir: 'right', code: 100 } }
 *
 * keyedBy(array, 'dir');
 * // => { left: { dir: 'left', code: 97 }, right: { dir: 'right', code: 100 } }
 */
export default function keyedBy<T, K extends Key>(array: T[], keySelector: ((arg: T, i: number) => K) | keyof T): Record<K, T> {
    const result = {} as Record<K, T>;

    const iteratee = typeof keySelector === 'function' ? keySelector : (o: T) => o[keySelector as keyof T];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const key = iteratee(item, i);
        result[key as K] = item;
    }

    return result;
}

