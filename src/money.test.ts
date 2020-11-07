import Dollar from "./dollar";
import Franc from "./franc";
import Money from "./dollar";

test("5 * 2 equals to 10", () => {
  // 意図を伝える
  const money = new Dollar(5);
  expect(money.times(2)).toStrictEqual(new Dollar(10));
});

test("5 * 3 equals to 15", () => {
  const money = new Dollar(5);
  expect(money.times(3)).toStrictEqual(new Dollar(15));
});

test("test Dollar equality", () => {
  expect(new Dollar(5)).toStrictEqual(new Dollar(5));
  expect(new Dollar(5)).not.toStrictEqual(new Dollar(6));
});

test("test Franc equality", () => {
  expect(new Franc(5)).toStrictEqual(new Franc(5));
  expect(new Franc(5)).not.toStrictEqual(new Franc(6));
});

test("5CHF * 2 equals to 10 CHF", () => {
  const money = new Franc(5);
  expect(money.times(2)).toStrictEqual(new Franc(10));
});

test("5CHF equals to 5 dollar", () => {
  expect(new Dollar(10)).not.toStrictEqual(new Franc(10));
});
