const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let additional = '';
  if (typeof options.addition != 'undefined') {
    additional = options.addition;
    if (typeof options.additionRepeatTimes != 'undefined') {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        if (options.additionSeparator) {
          additional += options.additionSeparator + options.addition;
        } else {
          additional += '|' + options.addition;
        }
      }
    }
  }
  let part = (str + additional);
  let result = part;
  if (options.repeatTimes) {
    for (let i = 1; i < options.repeatTimes; i++) {
      if (options.separator != undefined) {
        result += options.separator + part;
      } else {
        result += '+' + part;
      }
    }
  }
  return result;
}

module.exports = {
  repeater
};
