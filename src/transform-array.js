const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (Array.isArray(arr)) {
    return arr.map((el, index, array) => {
      if (el === '--discard-next' || el === '--discard-prev') {}
      else if (el === '--double-prev' && array[index - 2] === '--discard-next') {}
      else if (el === '--double-prev') {return array[index - 1]}
      else if (el === '--double-next') {return array[index + 1]}
      else if (array[index - 1] === '--discard-next') {}
      else if (array[index + 1] === '--discard-prev') {}
      else {return el}
    }).filter(e => e != undefined)
  }
  else throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};
