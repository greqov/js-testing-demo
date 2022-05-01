const analyzeArray = require('./analyzeArray');

test('accept array as an argument', () => {
  expect(() => analyzeArray(1, 2, 3)).toThrow();
});

test('arg array contains numbers only', () => {
  expect(() => analyzeArray([1, '2'])).toThrow();
});

test('arg array has at least 1 item', () => {
  expect(() => analyzeArray([])).toThrow();
});

test('fn works properly', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

// TODO: test for floating point result?
