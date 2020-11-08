/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
export class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  private _currency: string = "USD";

  constructor(amount: number) {
    super(amount);
    this._currency = "USD";
  }

  get currency(): string {
    return this._currency;
  }

  set currency(value: string) {
    this._currency = value;
  }

  times(mult: number): Money {
    return new Dollar(this.amount * mult);
  }
}

export class Franc extends Money {
  private _currency: string = "USD";

  constructor(amount: number) {
    super(amount);
    this._currency = "CHF";
  }

  get currency(): string {
    return this._currency;
  }

  set currency(value: string) {
    this._currency = value;
  }

  times(mult: number): Money {
    return new Franc(this.amount * mult);
  }
}
export default Money;
