// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const calculator = {
  add(a, b) {
    this.validateArgs(a, b);
    return a + b;
  },
  subtract(a, b) {
    this.validateArgs(a, b);
    return a - b;
  },
  divide(a, b) {
    this.validateArgs(a, b);
    return a / b;
  },
  multiply(a, b) {
    this.validateArgs(a, b);
    return a * b;
  },
  validateArgs(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Number argument required!');
  }
};

export default calculator;
