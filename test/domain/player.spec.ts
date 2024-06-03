import { Player } from "../../app/domain/player";

describe('player 테스트', () => {
    it('플레이어를 생성한다. 소지금의 초기 값은 0이다', () => {
        //given
        const name = "이름";

        //when
        const player = Player.from(name);

        //then
        expect(player.getNameValue()).toBe(name)
        expect(player.getBudgetValue()).toBe(0)
    });

    it('소지금을 변경한다', () => {
        //given
        const name = "이름";
        const player = Player.from(name);

        //when
        player.setBudget(100);

        //then
        expect(player.getBudgetValue()).toBe(100)
    });

    it('소지금을 차감한다', () => {
        //given
        const name = "이름";
        const player = Player.from(name);
        player.setBudget(1000);

        //when
        const withdrawMoney = player.withdraw(400);

        //then
        expect(withdrawMoney.value).toBe(400)
        expect(player.getBudgetValue()).toBe(600)
    });

    it('소지금을 추가한다', () => {
        //given
        const name = "이름";
        const player = Player.from(name);
        player.setBudget(1000);

        //when
        player.deposit(500);

        //then
        expect(player.getBudgetValue()).toBe(1500)
    });
});
