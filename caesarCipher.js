// A caesarCipher function that takes a string and returns it with each character “shifted”.

function caesarCipher(str, shift = 1) {
  if (typeof str !== 'string') throw new Error('String argument required!');

  const isUpperCase = (char) => /[A-Z]/.test(char);

  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let output = '';

  str.split('').forEach((char) => {
    if (isUpperCase(char)) {
      let idx = abc.indexOf(char.toLowerCase());
      idx = (idx + shift) % 26;
      // restore case
      output += abc[idx].toUpperCase();
    } else {
      // lowercase or punctuation
      let idx = abc.indexOf(char);
      if (idx === -1) {
        output += char;
      } else {
        idx = (idx + shift) % 26;
        output += abc[idx];
      }
    }
  });

  return output;
}

module.exports = caesarCipher;
