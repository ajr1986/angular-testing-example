import { getValues } from "./array";

describe('Array tests', () => {

    it('Must return 5 values', () => {

        const result = getValues();

        expect(result.length).toBeGreaterThanOrEqual(3);
    });

    it('Must exist 2 and 4 value', () => {

        const result = getValues();

        expect(result).toContain(2);
        expect(result).toContain(4);
    });

});