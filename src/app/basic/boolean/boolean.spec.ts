import { isValid } from "./boolean";

describe('Boolean tests', () => {

    it('The result must be true', () => {

        const result = isValid();

        expect(result).toBeTruthy();
    });
});