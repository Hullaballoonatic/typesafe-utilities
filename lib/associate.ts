export type Key = string | number | symbol;

export function associateBy<T, K extends Key | keyof T>(array: T[], keySelector: (arg: T) => K): Record<K, T> {
    const result = {} as Record<K, T>;

    for (const item of array) {
        const key = keySelector(item);
        result[key] = item;
    }

    return result;
}

export function associate<T, K extends Key, V>(array: T[], transform: (arg: T) => [K, V]): Record<K, V> {
    const result = {} as Record<K, V>;

    for (const item of array) {
        const [key, value] = transform(item);
        result[key] = value;
    }

    return result;
}