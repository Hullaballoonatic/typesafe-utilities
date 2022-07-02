import drop from './drop';

describe('drop', () => {
    describe('if multiple instances of element are present in the array', () => {
        const element = 'a';
        const array = [element, 'b', 'c', element];

        it('should the first instance of element', () => {
            const expected = ['b', 'c', element];
            drop(array, element);

            expect(array).toEqual(expected);
        });
    });

    describe('if one instance of element is present in the array', () => {
        const element = 'b';
        const array = ['a', element, 'c'];

        it('should remove the element', () => {
            const expected = ['a', 'c'];
            drop(array, element);

            expect(array).toEqual(expected);
        });
    });

    describe('if no instances of element are present in the array', () => {
        const element = 'd';
        const array = ['a', 'b', 'c'];

        it('should not change the array', () => {
            const expected = ['a', 'b', 'c'];
            drop(array, element);

            expect(array).toEqual(expected);
        });
    });
});