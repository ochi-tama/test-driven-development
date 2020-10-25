import Money from "./money";

test("5 * 2 equals to 10", () => {
  const money = new Money(5);
  expect(money.times(2)).toBe(10);
});
