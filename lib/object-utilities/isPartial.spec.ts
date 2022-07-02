import isPartial from './isPartial';

describe('isPartial', () => {
    type TestObject = { a: number, b: number };
    const object: TestObject = {a: 0, b: 1};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testCases: { source: any; expected: boolean }[] = [
        {source: {a: 0}, expected: true},
        {source: {a: 1}, expected: true},
        {source: {b: 1}, expected: true},
        {source: {a: 0, b: 0}, expected: true},
        {source: {d: 1}, expected: false},
        {source: {a: 0, d: 4}, expected: false},
        {source: {}, expected: true},
    ];

    testCases.forEach(({source, expected}) => {
        describe(`if object = '${JSON.stringify(object)}' and source = '${source}'`, () => {
            it(`should return '${expected}'`, () => {
                const actual = isPartial(object, source);

                expect(actual).toBe(expected);
            });
        });
    });
});