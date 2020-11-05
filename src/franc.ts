class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(mult: number): Franc {
    return new Franc(this.amount * mult);
  }
}

export default Franc;
