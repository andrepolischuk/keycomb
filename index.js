
'use strict';

/**
 * Module dependencies
 */

var keycode = require('keycodes');

/**
 * Expose parser
 * @param  {String|Array|Object} input
 * @return {Object|Array}
 * @api public
 */

module.exports = function(input) {
  if (typeof input === 'string') input = input.replace(/\s/g, '').split('+');
  if (typeof input !== 'object') return;
  if (input.length) return code(input);
  return combination(input);
};

/**
 * Get codes
 *
 * @param  {Array} input
 * @return {Object}
 * @api private
 */

function code(input) {
  var obj = {};
  obj.keyCode = [];
  obj.altKey = false;
  obj.ctrlKey = false;
  obj.shiftKey = false;

  var key;

  for (var k = 0, len = input.length; k < len; k++) {
    key = keycode(input[k]);
    if (key === 18) obj.altKey = true;
    if (key === 17) obj.ctrlKey = true;
    if (key === 16) obj.shiftKey = true;
    if (key < 16 || key > 18) obj.keyCode.push(key);
  }

  return obj;
}

/**
 * Get combination
 *
 * @param  {Object} input
 * @return {Array}
 * @api private
 */

function combination(input) {
  var keys = input.keyCode.length ? input.keyCode : [input.keyCode];
  var arr = [];

  if (input.altKey) arr.push('alt');
  if (input.ctrlKey) arr.push('ctrl');
  if (input.shiftKey) arr.push('shift');

  for (var k = 0, len = keys.length; k < len; k++) {
    arr.push(keycode(keys[k]));
  }

  return arr;
}
