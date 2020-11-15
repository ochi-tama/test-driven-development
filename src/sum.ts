import Bank from "./bank";
import Expression from "./expression";
import Money from "./money";
export default class Sum implements Expression {
  augend: Expression;

  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  plus(addened: Expression): Expression {
    return addened;
  }

  reduce(bank: Bank, to: string): Money {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
