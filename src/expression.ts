import Bank from "./bank";
import Money from "./money";
export default interface IExpression {
  reduce(bank: Bank, to: String): Money;
}
