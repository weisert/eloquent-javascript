/*jslint node: true */
'use strict';

module.exports = {};
var exports = module.exports;

exports.min = function(a, b) {
  return (a < b) ? a : b;
};

exports.isEven = function(n) {
  function isEven(num) {
    if (num === 0)
      return true;
    if (num === 1)
      return false;
    return isEven((num > 0) ? num - 2 : num + 2);
  }
  return isEven(n);
};

exports.countBs = function(s) {
  var result = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'B')
      ++result;
  }
  return result;
};

exports.countChar = function(s, c) {
  var result = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == c)
      ++result;
  }
  return result;
};
