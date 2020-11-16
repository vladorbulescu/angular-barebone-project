import { ArrayHelper } from './array-helper';

describe('ArrayHelper', () => {
    it('should create an instance', () => {
        expect(new ArrayHelper()).toBeTruthy();
    });

    it('removes an item from an array', () => {
        const array = ['test', 'test2', 'test3'];
        const elementToRemove = 'test2';
        const newArray = ArrayHelper.Remove(array, elementToRemove);

        expect(newArray).toEqual(['test', 'test3']);
    });
});
