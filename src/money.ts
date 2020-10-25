class Dollar {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(mult: number): Dollar {
    return new Dollar(this.amount * mult);
  }
}

export default Dollar;
