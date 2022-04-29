// A reverseString function that takes a string and returns it reversed.

function reverseString(str) {
  if (typeof str !== 'string') throw new Error('String argument required!');

  return str.split('').reverse().join('');
}

export default reverseString;
