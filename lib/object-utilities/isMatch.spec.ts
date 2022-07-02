import isMatch from './isMatch';

describe('isMatch', () => {
    type TestObject = { a: number, b: number };
    const object: TestObject = {a: 0, b: 1};

    const testCases: {
        source: Partial<TestObject> | [keyof TestObject, unknown] | keyof TestObject;
        expected: boolean;
    }[] = [
        {source: {a: 0}, expected: true},
        {source: {a: 1}, expected: false},
        {source: ['a', 0], expected: true},
        {source: ['a', 1], expected: false},
        {source: 'a', expected: false},
        {source: 'b', expected: true},
    ];

    testCases.forEach(({source, expected}) => {
        describe(`if object = '${JSON.stringify(object)}' and source = '${JSON.stringify(source)}'`, () => {
            it(`should return '${expected}'`, () => {
                const actual = isMatch(object, source);

                expect(actual).toBe(expected);
            });
        });
    });
});