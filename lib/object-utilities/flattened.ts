/**
 * Return a one-depth, flattened version of `object`. does not flatten arrays.
 * @example
 * const object = { name: { first: 'Casey', last: 'Stratton' }, age: 33 };
 *
 * flattened(object);
 * // => { 'name.first': 'Casey', 'name.last': 'Stratton', age: 33 };
 */
export default function flattened(object: Record<string, unknown>): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for (const i in object) {
        if (object[i] === null) {
            result[i] = null;
        } else if (typeof object[i] === 'object') {
            const nested = flattened(object[i] as Record<string, unknown>);

            if (Object.keys(nested).length) {
                for (const j in nested) {
                    result[`${i}.${j}`] = nested[j];
                }
            } else {
                result[i] = object[i];
            }
        } else {
            result[i] = object[i];
        }
    }

    return result;
}