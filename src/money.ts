/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
export class Money {
  protected amount: number;
  public currency: string = "";

  constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "");
  }

  static franc(amount: number): Franc {
    return new Franc(amount, "");
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount);
    this.currency = "USD";
  }

  times(mult: number): Money {
    return Money.dollar(this.amount * mult);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount);
    this.currency = "CHF";
  }

  times(mult: number): Money {
    return Money.franc(this.amount * mult);
  }
}
export default Money;
