import {associatedBy} from './index';

describe('associatedBy', () => {
    it('should return expected value', () => {
        const array = [{dir: 'left', code: 97}, {dir: 'right', code: 100}];

        const actual = associatedBy(array, o => [o.dir, o.code]);
        const expected = {'left': 97, 'right': 100};

        expect(actual).toEqual(expected);
    });
});