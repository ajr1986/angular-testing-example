import { increment } from "./number";

describe('Number tests', () => {

    it('return 100 if input number is greater than 100', () => {

        const result = increment(101);

        expect(result).toBe(100);
    });

    it('return input number + 1, if input number is less than 100', () => {

        const nbr = 5;
        const result = increment(nbr);

        expect(result).toBe(nbr + 1);
    });
});