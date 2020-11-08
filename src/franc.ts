import Money from "./money";
class Franc extends Money {
  times(mult: number): Money {
    return new Franc(this.amount * mult);
  }
}

export default Franc;
