import { greeting } from "./string";

describe('String tests', () => {

    it('Must be a string', () => {

        const result = greeting('Javi');

        expect(typeof result).toBe('string');
    });

    it('Must return a greeting with the name', () => {

        const name = 'Javi'
        const result = greeting(name);

        expect(result).toContain(name);
    });
});