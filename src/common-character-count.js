const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let s1Arr = s1.split('').sort().map((element, index, array) => {
    if (element === array[index - 1]) {
      return;
    };
    let i = 1;
    while (element === array[index + i]) {
      i++;
    }
    return {letter: element, count: i};
  }).filter(e => e !== undefined);
  const s2Arr = s2.split('').sort().map((element, index, array) => {
    if (element === array[index - 1]) {
      return;
    };
    let i = 1;
    while (element === array[index + i]) {
      i++;
    }
    return {letter: element, count: i};
  }).filter(e => e !== undefined);
  let result = 0;
  s1Arr.forEach(el1 => {
    if (s2Arr.find(el2 => el2.letter === el1.letter)) {
      result += Math.min(el1.count, s2Arr.find(el2 => el2.letter === el1.letter).count);
    }
  });
  return result;
}

module.exports = {
  getCommonCharacterCount
};
