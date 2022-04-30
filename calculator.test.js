import calculator from './calculator';

test('.add() accepts numbers only', () => {
  expect(() => calculator.add('5', [])).toThrow();
});

test('.add() does not sum strings', () => {
  expect(() => calculator.add(3, '3')).toThrow();
});

test('.add() sums integers', () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test('.add() sums float numbers', () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('.subtract() accepts numbers only', () => {
  expect(() => calculator.subtract('5', 3)).toThrow();
});

test('.subtract() can manage integers', () => {
  expect(calculator.subtract(3, 5)).toBe(-2);
});

test('.subtract() can manage float numbers', () => {
  expect(calculator.subtract(0.5, 0.2)).toBeCloseTo(0.3);
});

test('.divide() accepts numbers only', () => {
  expect(() => calculator.divide(5, '2')).toThrow();
});

test('.divide() can divide integers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('.divide() can divide floats', () => {
  expect(calculator.divide(0.9, 3)).toBe(0.3);
});

test('.multiply() accepts numbers only', () => {
  expect(() => calculator.multiply(2, '0.3')).toThrow();
});

test('.multiply() can manage integers', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

test('.multiply() can manage float numbers', () => {
  expect(calculator.multiply(3, 0.3)).toBeCloseTo(0.9);
});
