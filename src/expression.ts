import Money from "./money";
export default interface IExpression {
  reduce(to: String): Money;
}
