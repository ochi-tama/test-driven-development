/* eslint-disable no-magic-numbers */
import Money from "./money";

test("5 * 2 equals to 10", () => {
  // 意図を伝える
  const money = Money.dollar(5);
  expect(money.times(2)).toEqual(Money.dollar(10));
});

test("5 * 3 equals to 15", () => {
  const money = Money.dollar(5);
  expect(money.times(3)).toEqual(Money.dollar(15));
});

test("test to String", () => {
  const money = Money.dollar(5);
  expect(money.toString()).toBe("5 USD");
});

test("Money equality", () => {
  expect(Money.dollar(5)).toEqual(Money.dollar(5));
  expect(Money.franc(5)).toEqual(Money.franc(5));
  expect(Money.dollar(5)).not.toEqual(Money.dollar(6));
});

test("5CHF not equals to 5 dollar", () => {
  expect(Money.dollar(10)).not.toStrictEqual(Money.franc(10));
});

test("currency equals", () => {
  expect("USD").toBe(Money.dollar(1).currency);
  expect("CHF").toBe(Money.franc(1).currency);
});
