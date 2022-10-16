const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const object = {};
  const result = domains.map(e => e.split('.').reverse()).map(e => e.map((e, i, a) => {
    let item = '.' + a[0];
    for (let j = 1; j <= i; j++) {
      item += '.' + a[j];
    }
    return item;
    })).flat();
  const uniq = new Set(result);
  uniq.forEach(el1 => object[el1] = result.filter(el2 => el2 === el1).length);
  return object
}

module.exports = {
  getDNSStats
};
