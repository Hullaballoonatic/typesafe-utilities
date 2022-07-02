import isKey from './isKey';

describe('isKey', () => {
    type TestObject = { a: number, b: number };
    const object: TestObject = {a: 0, b: 1};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testCases: { candidate: any; expected: boolean }[] = [
        {candidate: 'a', expected: true},
        {candidate: 'c', expected: false},
        {candidate: 0, expected: false},
    ];

    testCases.forEach(({candidate, expected}) => {
        describe(`if object = '${JSON.stringify(object)}' and candidate = '${candidate}'`, () => {
            it(`should return '${expected}'`, () => {
                const actual = isKey(object, candidate);

                expect(actual).toBe(expected);
            });
        });
    });
});