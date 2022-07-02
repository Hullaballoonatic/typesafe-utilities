import contains from './contains';
import isPartial from './isPartial';

/**
 * Performs a partial deep comparison between object and source to determine if object contains equivalent property values.
 * @example
 * const object = { 'a': 1, 'b': false, 'c': true };
 *
 * // Partial object
 * isMatch(object, { 'b': false, 'c': true });
 * // => true
 *
 * isMatch(object, { 'b': true });
 * // => false
 *
 * // array form
 * isMatch(object, [ 'a', 1 ]);
 * // => true
 *
 * isMatch(object, 'c');
 * // => true
 */
export default function isMatch<T>(object: T, source: Partial<T> | [keyof T, unknown] | keyof T): boolean {
    if (isPartial(object, source)) {
        return contains(object, source);
    }

    if (Array.isArray(source)) {
        const [key, value] = source;

        return object[key] === value;
    }

    return !!object[source];
}