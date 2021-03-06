/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

import Bank from "./bank";
import Expression from "./expression";
import Sum from "./sum";
export class Money implements Expression {
  public amount: number;

  public currency: string = "";

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  times(mult: number): Expression {
    return new Money(this.amount * mult, this.currency);
  }

  plus(addedMoney: Expression): Expression {
    return new Sum(this, addedMoney);
  }

  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}

export default Money;
