import mapValuesBy from './mapValuesBy';

describe('mapValuesBy', () => {
    type User = { user: string; age: number };

    const object = {
        fred: {user: 'fred', age: 40},
        pebbles: {user: 'pebbles', age: 1},
    };

    const testCases: { transform: ((value: User) => number) | keyof User; expected: Record<string, number> }[] = [
        {transform: (user: User) => user.age, expected: {fred: 40, pebbles: 1}},
        {transform: 'age', expected: {fred: 40, pebbles: 1}},
    ];

    testCases.forEach(({transform, expected}) => {
        describe(`if object = '${JSON.stringify(object)}' and transform = '${JSON.stringify(transform)}'`, () => {
            it(`should return '${JSON.stringify(expected)}'`, () => {
                const actual = mapValuesBy(object, transform);
                
                expect(actual).toEqual(expected);
            });
        });
    });
});