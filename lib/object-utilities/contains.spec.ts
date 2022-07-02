import contains from './contains';

describe(`contains`, () => {
    type TestObject = { a: number, b: number };
    const object: TestObject = {a: 1, b: 2};

    const testCases: { source: Partial<TestObject>; expected: boolean }[] = [
        {source: {a: 1, b: 2}, expected: true},
        {source: {a: 1}, expected: true},
        {source: {}, expected: true},
        {source: {a: 2}, expected: false},
    ];

    testCases.forEach(({source, expected}) => {
        describe(`if object = '${JSON.stringify(object)}' and candidate = '${JSON.stringify(source)}'`, () => {
            it(`should return '${expected}'`, () => {
                const actual = contains(object, source);

                expect(actual).toBe(expected);
            });
        });
    });
});