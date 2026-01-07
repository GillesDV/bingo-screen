import { MaxPipe } from './max.pipe';

describe('MaxPipe', () => {
    let pipe: MaxPipe;

    beforeEach(() => {
        pipe = new MaxPipe();
    });

    it('should return the largest number in the array', () => {
        const numbers: readonly number[] = [1, 5, 3, 9, 2];

        const result = pipe.transform(numbers);

        expect(result).toBe(9);
    });

    it('should return the number itself for a single-element array', () => {
        const numbers: readonly number[] = [42];

        const result = pipe.transform(numbers);

        expect(result).toBe(42);
    });

    it('should return null for an empty array', () => {
        const numbers: readonly number[] = [];

        const result = pipe.transform(numbers);

        expect(result).toBeNull();
    });

    it('should not mutate the input array', () => {
        const numbers: readonly number[] = [3, 1, 2];
        const copy = [...numbers];

        pipe.transform(numbers);

        expect(numbers).toEqual(copy);
    });
});
