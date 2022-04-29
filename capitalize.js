// A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(str) {
  if (typeof str !== 'string') throw new Error('String argument required!');

  return str[0].toUpperCase() + str.slice(1);
}

export default capitalize;
