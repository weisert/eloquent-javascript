
'use strict';

module.exports = {};
var exports = module.exports;

exports.loopTriangle = function() {
  var result = '';
  for (var current = '#'; current.length < 9; current += '#')
    result += current + '\n';
  return result;
};

exports.fizzBuzz = function() {
  var result = '';
  for (var current = 1; current <= 100; current++) {
    var line = '';
    if (current % 3 == 0)
      line = 'Fizz';
    if (current % 5 == 0)
      line += 'Buzz';
    line = line || String(current);
    result += line + '\n'
  }
  return result;
}

exports.chessBoard = function() {
  var result = ''
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if ((i+j) % 2)
        result += ' ';
      else
        result += '#';
    }
    result += '\n';
  }
  return result;
}
