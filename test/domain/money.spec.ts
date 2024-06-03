import { Money } from "../../app/domain/money";

describe('money 테스트', () => {
    it('money를 생성한다', () => {
        //given
        const value = 100;

        //when
        const money = Money.from(value);

        //then
        expect(money.value).toBe(value)
    });

    it('음수로 money를 생성하려 하면 예외가 발생한다', () => {
        //given
        const negativeValue = -1;

        //when & then
        expect(() => {
            Money.from(negativeValue)
        }).toThrow("0보다 작은 금액이 될 수 없습니다.")
    });

    it('100으로 나눠떨어지지 않는 금액으로 money를 생성하면 예외가 발생한다.', () => {
        //given
        const invalidValue = 99;

        //when & then
        expect(() => {
            Money.from(invalidValue)
        }).toThrow("100원 단위로만 설정할 수 있습니다.")
    });

    it('다른 money와 더한 money를 반환한다.', () => {
        //given
        const money = Money.from(200);
        const other = Money.from(300);

        //when
        const sum = money.add(other);

        //then
        expect(sum.value).toBe(500);
    });

    it('다른 money를 뺀 money를 반환한다', () => {
        //given
        const money = Money.from(300);
        const other = Money.from(200);

        //when
        const sum = money.subtract(other);

        //then
        expect(sum.value).toBe(100);
    });


    it('money를 뺀 금액이 음수인 경우 예외가 발생한다', () => {
        //given
        const money = Money.from(200);
        const other = Money.from(300);

        //when & then
        expect(()=> {
            money.subtract(other)
        }).toThrow("0보다 작은 금액이 될 수 없습니다.")
    });
});
