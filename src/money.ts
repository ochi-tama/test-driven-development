/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

import Expression from "./expression";
export class Money implements Expression {
  protected amount: number;
  public currency: string = "";

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  toString(): string {
    return this.amount + " " + this.currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  times(mult: number): Money {
    return new Money(this.amount * mult, this.currency);
  }

  plus(addedMoney: Money): Expression {
    return new Money(this.amount + addedMoney.amount, this.currency);
  }
}

export default Money;
