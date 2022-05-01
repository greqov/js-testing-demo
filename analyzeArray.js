/*

An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

*/

function analyzeArray(arr) {
  if (!Array.isArray(arr)) throw new Error('Array argument is required');

  arr.forEach((item) => {
    if (typeof item !== 'number')
      throw new Error('Array argument should have numbers only');
  });

  if (!arr.length) {
    throw new Error('Array argument should have at least 1 item');
  }

  const length = arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = arr.reduce((prev, curr) => prev + curr, 0) / length;

  return {
    average,
    min,
    max,
    length
  };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
