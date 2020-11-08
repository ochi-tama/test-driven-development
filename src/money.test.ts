/* eslint-disable no-magic-numbers */
import Money from "./money";

test("5 * 2 equals to 10", () => {
  // 意図を伝える
  const money = Money.dollar(5);
  expect(money.times(2)).toStrictEqual(Money.dollar(10));
});

test("5 * 3 equals to 15", () => {
  const money = Money.dollar(5);
  expect(money.times(3)).toStrictEqual(Money.dollar(15));
});

test("Dollar equality", () => {
  expect(Money.dollar(5)).toStrictEqual(Money.dollar(5));
  expect(Money.dollar(5)).not.toStrictEqual(Money.dollar(6));
});

test("Franc equality", () => {
  expect(Money.franc(5)).toStrictEqual(Money.franc(5));
  expect(Money.franc(5)).not.toStrictEqual(Money.franc(6));
});

test("5CHF * 2 equals to 10 CHF", () => {
  const money = Money.franc(5);
  expect(money.times(2)).toStrictEqual(Money.franc(10));
});

test("5CHF not equals to 5 dollar", () => {
  expect(Money.dollar(10)).not.toStrictEqual(Money.franc(10));
});

test("currency equals", () => {
  expect("USD").toBe(Money.dollar(1).currency);
  expect("CHF").toBe(Money.franc(1).currency);
});
