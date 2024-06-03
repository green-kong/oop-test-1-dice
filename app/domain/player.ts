import { Name } from "./name";
import { Money } from "./money";

export class Player {
    private readonly name: Name;
    private budget: Money = Money.ZERO

    private constructor(name: Name) {
        this.name = name;
    }

    static from(name: string) {
        return new Player(Name.from(name));
    }

    withdraw(withdrawAmount: number) {
        const other = Money.from(withdrawAmount);
        this.budget = this.budget.subtract(other);
        return other;
    }

    deposit(depositAmount: number) {
        const other = Money.from(depositAmount);
        this.budget = this.budget.add(other);
        return other;
    }

    setBudget(budget: number) {
        this.budget = Money.from(budget);
    }

    getNameValue(): string {
        return this.name.value;
    }

    getBudgetValue(): number {
        return this.budget.value;
    }
}
