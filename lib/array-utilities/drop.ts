/**
 * Removes the first instance of `element` or does nothing if `element` is not found.
 * @example
 * const array = ['a', 'b', 'c', 'a'];
 * drop(array, 'a');
 * // => ['b', 'c', 'a']
 */
export default function drop<T>(array: T[], element: T) {
    const i = array.indexOf(element);

    if (i >= 0) {
        array.splice(i, 1);
    }
}