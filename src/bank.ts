import Expression from "./expression";
import Pair from "./pair";

export interface IRates {
  [currency: string]: number;
}

export default class Bank {
  private rates: IRates = {};

  reduce(source: Expression, to: string): Expression {
    // クラスの明示的なチェックはポリモフィズムに置き換える
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    this.rates[new Pair(from, to).toString()] = rate;
  }

  rate(from: string, to: string): number {
    if (from === to) {
      // eslint-disable-next-line no-magic-numbers
      return 1;
    }
    return this.rates[new Pair(from, to).toString()];
  }
}
