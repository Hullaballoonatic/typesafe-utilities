import traverse from './traverse';

describe('traverse', () => {
    it('should properly traverse a base case', () => {
        const expected = 'foo';
        const field = 'a';
        const obj = {[field]: expected};
        const actual = traverse(obj, field);

        expect(actual).toBe(expected);
    });

    it('should properly traverse a nested case', () => {
        const expected = 'bar';
        const fields = ['a', 'b'];
        const obj = {[fields[0]]: {[fields[1]]: expected}};
        const path = fields.join('.');
        const actual = traverse(obj, path);

        expect(actual).toBe(expected);
    });

    it(`should return 'undefined' if the path can't be found`, () => {
        const actual = traverse({}, 'a.b.c');

        expect(actual).toBeUndefined();
    });
});