/**
 * Returns `true` if `candidate` is a key of `object`; otherwise, `false`.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isKey<T>(object: T, candidate: any): candidate is keyof T {
    return Object.keys(object).includes(candidate);
}