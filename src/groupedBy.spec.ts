import groupedBy from './groupedBy';

describe('groupedBy', () => {
    it(`should return expected value when passed a function for 'keySelector'`, () => {
        const array = [1, 2, 3, 4, 5];
        const keySelector = (n: number) => n % 2;

        const actual = groupedBy(array, keySelector);
        const expected = {0: [2, 4], 1: [1, 3, 5]};

        expect(actual).toEqual(expected);
    });

    it(`should return expected value when passed a key for 'keySelector'`, () => {
        const array = ['one', 'two', 'three'];
        const keySelector = 'length';

        const actual = groupedBy(array, keySelector);
        const expected = {'3': ['one', 'two'], '5': ['three']};

        expect(actual).toEqual(expected);
    });
});