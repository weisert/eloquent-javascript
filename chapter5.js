
'use strict';

module.exports = {};
var exports = module.exports;

exports.flat = function(arr) {
  return arr.reduce(function(current, el) {
    return current.concat(el);
  }, []);
};

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

exports.motherChildAgeDiff = function() {
  var ancestry = JSON.parse(require('./chapter5_res/ancestry.js'));
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
  var diffs = [];
  ancestry.forEach(function(person) {
    if (person.mother && person.mother in byName) {
      var mother = byName[person.mother];
      diffs.push(person.born - mother.born);
    }
  });
  return average(diffs);
}

exports.historicalLifeExpectancy = function() {
  var ancestry = JSON.parse(require('./chapter5_res/ancestry.js'));
  var result = {};
  ancestry.forEach(function(person) {
    var key = Math.ceil(person.died/100);
    if (key in result)
      result[key].push(person.died - person.born);
    else
      result[key] = [person.died - person.born];
  });
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      result[key] = Number(average(result[key]).toFixed(1));
    }
  }
  return result;
}

exports.every = function(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    if (!fun(arr[i]))
      return false;
  }
  return true;
}

exports.some = function(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i]))
      return true;
  }
  return false;
}
