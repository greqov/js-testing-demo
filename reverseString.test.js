import reverseString from './reverseString';

test('accept strings only', () => {
  expect(() => reverseString([1, 2])).toThrow();
});

test('', () => {
  expect(reverseString('Apple')).toBe('elppA');
});
