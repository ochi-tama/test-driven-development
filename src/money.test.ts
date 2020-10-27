import Money from "./money";

test("5 * 2 equals to 10", () => {
  const money = new Money(5);
  expect(money.times(2).amount).toBe(10);
});

test("5 * 3 equals to 15", () => {
  const money = new Money(5);
  expect(money.times(3).amount).toBe(15);
});

test("test  equality", () => {
  expect(new Money(5)).toStrictEqual(new Money(5));
  expect(new Money(5)).not.toStrictEqual(new Money(6));
});
