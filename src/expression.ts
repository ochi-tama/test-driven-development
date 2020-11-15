import Bank from "./bank";
import Money from "./money";
export default interface IExpression {
  plus(addened: IExpression): IExpression;
  reduce(bank: Bank, to: String): Money;
}
