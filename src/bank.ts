import Money from "./money";
import Sum from "./sum";
import Expression from "./expression";

export default class Bank {
  reduce(source: Expression, to: string): Money {
    const sum = source as Sum;
    return sum.reduce(to);
  }
}
