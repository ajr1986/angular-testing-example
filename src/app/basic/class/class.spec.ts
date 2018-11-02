import { Player } from "./class";

describe('Class test', () => {

    let player;

    beforeEach(() => {
        player = new Player();
    });

    it('Damage 20', () => {

        const result = player.getDamage(20);
        console.log(result);
        expect(result).toBe(80);
    });

    it('Damage 50', () => {

        const result = player.getDamage(50);
        console.log(result);
        expect(result).toBe(50);
    });

    it('Damage 100', () => {

        const result = player.getDamage(100);
        console.log(result);
        expect(result).toBe(0);
    });
});