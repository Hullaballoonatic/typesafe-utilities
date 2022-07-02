import partitionedBy from './partitionedBy';

type User = { user: string; age: number; active: boolean };

describe('partitionedBy', () => {
    const barney: User = {user: 'barney', age: 36, active: false};
    const fred: User = {user: 'fred', age: 40, active: true};
    const pebbles: User = {user: 'pebbles', age: 1, active: false};
    const array: User[] = [barney, fred, pebbles];

    const testCases: {
        predicate: ((user: User) => boolean) | Partial<User> | keyof User;
        expected: User[][];
    }[] = [
        {predicate: (user: User) => user.active, expected: [[fred], [barney, pebbles]]},
        {predicate: {age: 1, active: false}, expected: [[pebbles], [barney, fred]]},
        {predicate: 'active', expected: [[fred], [barney, pebbles]]},
    ];

    testCases.forEach(({predicate, expected}) => {
        describe(`if array = '${JSON.stringify(array)}' and keySelector = '${JSON.stringify(predicate)}'`, () => {
            it(`should return '${JSON.stringify(expected)}'`, () => {
                const actual = partitionedBy(array, predicate);

                expect(actual).toEqual(expected);
            });
        });
    });
});