import { Player2 } from "./player-2";

describe('Emit test', () => {

    let player: Player2;

    beforeEach(() => {

        this.player = new Player2();
    });

    it('Must emit an event when it is damaged 100%', () => {

        let newHp = 0;

        this.player.hpChange.subscribe(hp => {

            newHp = hp;
        });

        this.player.getDamage(100);

        expect(newHp).toBe(0);
    });

    it('Must emit an event when it is damaged 50%', () => {

        let newHp = 0;

        this.player.hpChange.subscribe(hp => {

            newHp = hp;
        });

        this.player.getDamage(50);

        expect(newHp).toBe(50);
    });

});