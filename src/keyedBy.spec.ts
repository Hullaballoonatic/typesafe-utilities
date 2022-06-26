import {keyedBy} from './index';

describe('keyedBy', () => {
    type testType = { dir: string, code: number }

    const array: testType[] = [{dir: 'left', code: 97}, {dir: 'right', code: 100}];

    it(`should return expected value when passed a function for 'keySelector'`, () => {
        const keySelector = (o: testType) => String.fromCharCode(o.code);

        const actual = keyedBy(array, keySelector);
        const expected = {'a': {dir: 'left', code: 97}, 'd': {dir: 'right', code: 100}};

        expect(actual).toEqual(expected);
    });

    it(`should return expected value when passed a key for 'keySelector'`, () => {
        const keySelector = 'dir';

        const actual = keyedBy(array, keySelector);
        const expected = {left: {dir: 'left', code: 97}, right: {dir: 'right', code: 100}};

        expect(actual).toEqual(expected);
    });
});