import traverse from './traverse';

describe('traverse', () => {
    it('should properly traverse a base case', () => {
        const expected = 'foo';
        const field = 'a';
        const obj = {[field]: expected};
        const actual = traverse(obj, field);

        expect(actual).toBe(expected);
    });

    it('should properly traverse a nested case with default separator', () => {
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

    it(`should properly traverse a nested case with a custom separator`, () => {
        const expected = 'bar';
        const fields = ['a', 'b'];
        const obj = {[fields[0]]: {[fields[1]]: expected}};
        const path = fields.join('|');
        const actual = traverse(obj, path, '|');

        expect(actual).toBe(expected);
    });

    it(`should properly traverse a nested case with an array of fields`, () => {
        const expected = 'bar';
        const path = ['a', 'b'];
        const obj = {[path[0]]: {[path[1]]: expected}};
        const actual = traverse(obj, path);

        expect(actual).toBe(expected);
    });
});