import Money from "./money";
class Dollar extends Money {
  times(mult: number): Money {
    return new Dollar(this.amount * mult);
  }
}

export default Dollar;
