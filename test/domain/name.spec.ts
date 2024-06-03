import { Name } from "../../app/domain/name";

describe('name 테스트', () => {
    it('name을 생성한다', () => {
        //given
        const value = "이름";

        //when
        const name = Name.from(value);

        //then
        expect(name.value).toBe(value);
    });

    it.each(["아", "열글자가넘는이름이다아"])("2글자 미만, 10글자 초과하는 이름을 생성하려 하면 예외가 발생한다.",
        (invalidValue: string) => {
            expect(() => Name.from(invalidValue))
                .toThrow("이름은 2글자 이상 10글자 이하여야 합니다.")
        })
});
