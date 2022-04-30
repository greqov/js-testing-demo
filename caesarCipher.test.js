const caesarCipher = require('./caesarCipher');

test('accept strings only', () => {
  expect(() => caesarCipher(123)).toThrow();
});

test('return "shifted" string', () => {
  expect(caesarCipher('apple')).toBe('bqqmf');
});

test('can replace letter from the end of alphabet', () => {
  expect(caesarCipher('zenith')).toBe('afojui');
});

test('can handle punctuation', () => {
  expect(caesarCipher('wuut!?')).toBe('xvvu!?');
});

test('can handle multiple words', () => {
  expect(caesarCipher('just do it')).toBe('kvtu ep ju');
});

test('case sensitive', () => {
  expect(caesarCipher('Cipher')).toBe('Djqifs');
});

test('can handle punctuation and capitalized letters', () => {
  expect(caesarCipher('The body is ROUND!')).toBe('Uif cpez jt SPVOE!');
});

test('can shift not only by +1 letter', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});
