import Dollar from "./dollar";
import Franc from "./franc";
import Money from "./dollar";

test("5 * 2 equals to 10", () => {
  // 意図を伝える
  const money = new Money(5);
  expect(money.times(2)).toStrictEqual(new Dollar(10));
});

test("5 * 3 equals to 15", () => {
  const money = new Money(5);
  expect(money.times(3)).toStrictEqual(new Dollar(15));
});

test("test  equality", () => {
  expect(new Money(5)).toStrictEqual(new Money(5));
  expect(new Money(5)).not.toStrictEqual(new Money(6));
});

test("5CHF * 2 equals to 10 CHF", () => {
  const money = new Franc(5);
  expect(money.times(2)).toStrictEqual(new Franc(10));
});
