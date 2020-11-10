import Expression from "./expression";

export default class Bank {
  reduce(source: Expression, to: string): Expression {
    // クラスの明示的なチェックはポリモフィズムに置き換える
    return source.reduce(to);
  }

  addRate(from: string, to: string, rate: number): Bank {
    return this;
  }
}
