import Money from "./money";
import Sum from "./sum";
import Expression from "./expression";

export default class Bank {
  reduce(source: Expression, to: string): Money {
    // クラスの明示的なチェックはポリモフィズムに置き換える
    return source.reduce(to);
  }
}
