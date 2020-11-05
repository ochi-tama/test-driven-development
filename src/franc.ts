import Money from "./money";
class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(mult: number): Franc {
    return new Franc(this.amount * mult);
  }
}

export default Franc;
