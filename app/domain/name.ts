export class Name {
    private static readonly MINIMUM_LENGTH = 2;
    private static readonly MAXIMUM_LENGTH = 10;

    private readonly _value: string

    private constructor(value: string) {
        this._value = value;
    }

    static from(value: string): Name {
        if (value.length < this.MINIMUM_LENGTH
            || value.length > this.MAXIMUM_LENGTH) {
            throw Error("이름은 2글자 이상 10글자 이하여야 합니다.")
        }
        return new Name(value);
    }

    get value(): string {
        return this._value;
    }
}
