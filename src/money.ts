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
  times(mult: number): Money {
    return new Dollar(this.amount * mult);
  }
}

export class Franc extends Money {
  times(mult: number): Money {
    return new Franc(this.amount * mult);
  }
}
export default Money;
