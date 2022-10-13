const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (typeof value === 'undefined') chainMaker.chain.push('( )')
    else chainMaker.chain.push('( ' + value + ' )');
    return this
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || isNaN(+position) || !Number.isInteger(position)) {
      chainMaker.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    chainMaker.chain = chainMaker.chain.filter((el, index) => index !== position - 1)
    return this
  },
  reverseChain() {
    chainMaker.chain.reverse();
    return this
  },
  finishChain() {
    const result = chainMaker.chain.join('~~');
    chainMaker.chain = [];
    return result
  },
  chain: []
};

module.exports = {
  chainMaker
};
