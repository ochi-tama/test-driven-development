/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
export class Money {
  protected amount: number;
  public currency: string = "";

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Franc {
    return new Franc(amount, "CHF");
  }

  times(mult: number): Money {
    return new Money(this.amount * mult, this.currency);
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
export default Money;
