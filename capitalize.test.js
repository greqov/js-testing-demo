import capitalize from './capitalize';

test('accept strings only', () => {
  expect(() => capitalize(123)).toThrow();
});

test('capitalize first letter', () => {
  expect(capitalize('a')).toBe('A');
});

test('do not transform the rest of a string', () => {
  expect(capitalize('apple')).toBe('Apple');
});
