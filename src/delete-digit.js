const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  array = n.toString().split('');
  result = [];
  array.forEach((e, i) => {
    const arrayCopy = array.slice();
    arrayCopy[i] = '';
    result[i] = +arrayCopy.join('');
  });
  return Math.max(...result)
}

module.exports = {
  deleteDigit
};
