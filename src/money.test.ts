/* eslint-disable no-magic-numbers */
import Money from "./money";
import Bank from "./bank";
import Sum from "./sum";

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

test("$5 + $5 = $10", () => {
  const five = Money.dollar(5);
  const sum = five.plus(five) as Sum;
  const bank = new Bank();
  // imposter パターン。銀行(bank)に通貨計算をさせる。
  const reduced = bank.reduce(sum, "USD");
  expect(reduced).toEqual(Money.dollar(10));
});

test("$3 + $4 = $7", () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  // imposter パターン。銀行(bank)に通貨計算をさせる。
  const reduced = bank.reduce(sum, "USD");
  expect(reduced).toEqual(Money.dollar(7));
});
