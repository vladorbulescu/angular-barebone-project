import { StringHelper } from './string-helper';

describe('StringHelper', () => {
    it('should create an instance', () => {
        expect(new StringHelper()).toBeTruthy();
    });

    it('should return equal', () => {
        const str1 = 'test';
        const str2 = 'test';

        expect(StringHelper.Equals(str1, str2)).toBeTruthy();
    });
});
