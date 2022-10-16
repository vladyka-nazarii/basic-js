const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw new Error('Incorrect arguments!');
    }

    let messageNum = message.toUpperCase().split('')
    .map(e => (e.charCodeAt() > 64 && e.charCodeAt() < 91) ? e.charCodeAt() : e);

    let messageLength = 0;
    messageNum.forEach(e => {
      if (typeof e === 'number') messageLength++
    });

    let keyNum = key.repeat(Math.ceil(messageLength / key.length))
    .slice(0, messageLength).toUpperCase().split('')
    .map(e => e.charCodeAt());
    messageNum.forEach((e, i) => {
      if (typeof e !== 'number') {
        keyNum.splice(i, 0, '');
      }
    })

    let result = messageNum.map((e, i) => {
      if (typeof e === 'number') {
        if (e + keyNum[i] - 65 > 90) {
          return String.fromCharCode(e + keyNum[i] - 91);
        } else {
        return String.fromCharCode(e + keyNum[i] - 65);
        }
      } else return e
    });
    if (this.type == false) {
      return result.reverse().join('');
    } else {
      return result.join('');
    }
  }

  decrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw new Error('Incorrect arguments!');
    }

    let messageNum = message.toUpperCase().split('')
    .map(e => (e.charCodeAt() > 64 && e.charCodeAt() < 91) ? e.charCodeAt() : e);

    let messageLength = 0;
    messageNum.forEach(e => {
      if (typeof e === 'number') messageLength++
    });

    let keyNum = key.repeat(Math.ceil(messageLength / key.length))
    .slice(0, messageLength).toUpperCase().split('')
    .map(e => e.charCodeAt());
    messageNum.forEach((e, i) => {
      if (typeof e !== 'number') {
        keyNum.splice(i, 0, '');
      }
    })

    let result = messageNum.map((e, i) => {
      if (typeof e === 'number') {
        if (e - keyNum[i] < 0) {
          return String.fromCharCode(91 + e - keyNum[i]);
        } else {
        return String.fromCharCode(e - keyNum[i] + 65);
        }
      } else return e;
    });
    if (this.type == false) {
      return result.reverse().join('');
    } else {
      return result.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
