class Dollar {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(amount: number) {
    return this.amount * amount;
  }
}

export default Dollar;
