import {partitionedBy} from './index';

describe('partitionedBy', () => {
    type testType = { user: string, age: number, active: boolean };

    const usersByName = {
        barney: {user: 'barney', age: 36, active: false},
        fred: {user: 'fred', age: 40, active: true},
        pebbles: {user: 'pebbles', age: 1, active: false},
    };

    const users: testType[] = Object.values(usersByName);

    it(`should return expected value when passed a function for 'keySelector'`, () => {
        const keySelector = (o: testType) => o.age < 40;

        const actual = partitionedBy(users, keySelector);
        const expected = [[usersByName.barney, usersByName.pebbles], [usersByName.fred]];

        expect(actual).toEqual(expected);
    });

    it(`should return expected value when passed a key for 'keySelector'`, () => {
        const keySelector = 'active';

        const actual = partitionedBy(users, keySelector);
        const expected = [[usersByName.fred], [usersByName.barney, usersByName.pebbles]];

        expect(actual).toEqual(expected);
    });
});