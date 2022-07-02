import flattened from './flattened';

describe('flattened', () => {
    describe(`if 'object' is not nested`, () => {
        const object = {hello: 'world'};

        it(`should return a copy of 'object'`, () => {
            const actual = flattened(object);

            expect(actual).toEqual(object);
        });
    });

    describe(`if 'object' has all 'null' values`, () => {
        const object = {foo: null, bar: {baz: null}};

        it(`should return a flattened object with null values`, () => {
            const expected = {foo: null, 'bar.baz': null};
            const actual = flattened(object);

            expect(actual).toEqual(expected);
        });
    });

    describe(`if 'object' is nested`, () => {
        const object = {name: {first: 'casey', last: 'stratton'}, age: 33};

        it(`should return a flattened object`, () => {
            const expected = {'name.first': 'casey', 'name.last': 'stratton', age: 33};
            const actual = flattened(object);

            expect(actual).toEqual(expected);
        });
    });

    describe(`if a value of 'object' is an 'object' with no keys`, () => {
        const object = {objectWithNoKeys: new Date(123)};

        it(`should return an object containing the value of the non-keyed object`, () => {
            const expected = expect.objectContaining(object);
            const actual = flattened(object);

            expect(actual).toEqual(expected);
        });
    });

    describe(`if 'object' is multi-tier nested`, () => {
        const object = {foo: {bar: {baz: 'pow'}}};

        it(`should return a flattened object`, () => {
            const expected = {'foo.bar.baz': 'pow'};
            const actual = flattened(object);

            expect(actual).toEqual(expected);
        });
    });
});