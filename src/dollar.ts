import Money from "./money";
class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(mult: number): Dollar {
    return new Dollar(this.amount * mult);
  }
}

export default Dollar;
