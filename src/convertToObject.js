'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see
 * an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';')
    .filter(el => el.indexOf(':') !== -1);
  const finObj = {};

  sourceArray.map(callback);

  function callback(element) {
    const clearElement = element
      .replace(' ', '')
      .replace('\n', '');
    const dividedElement = clearElement.split(':');

    finObj[dividedElement[0]] = dividedElement[1];
  };

  return finObj;
}

module.exports = convertToObject;
