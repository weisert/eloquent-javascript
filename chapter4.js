/*jslint node: true */
'use strict';

function range(from, to, step) {
  var result = [];
  step = step || 1;
  for (var i = from; (step > 0 ? i <= to : i >= to); i += step)
    result.push(i);
  return result;
}

function sum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++ ) {
    result += arr[i];
  }
  return result;
}

function reverse(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function reverseInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length/2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

function arrayToList(arr) {
  var first = null;
  var last = null;
  arr.forEach(function(el) {
    var item = {value: el, rest: null};
    if (first === null) {
      first = item;
    }
    if (last)
      last.rest = item;
    last = item;
  });
  return first;
}

function listToArray(aList) {
  var current = aList;
  var result = [];
  while (current) {
    result.push(current.value);
    current = current.rest;
  }
  return result;
}

function prepend(value, rest) {
  var new_list = arrayToList([value]);
  new_list.rest = rest;
  return new_list;
}

function nth(aList, n) {
  var current = aList;
  for (var i = 0; i < n; i++) {
    if (current.rest) {
      current = current.rest;
    } else {
      return null;
    }
  }
  return current.value;
}

function deepEqual(lhs, rhs) {
  var props = [];
  for (var propLhs in lhs) {
    props.push(propLhs);
  }
  for (var propRhs in rhs) {
    if (props.indexOf(propRhs) == -1)
      return false;
  }
  var result = true;
  props.forEach(function(p) {
    if (typeof lhs[p] == 'object') {
      if(!deepEqual(lhs[p], rhs[p]))
        result = false;
    } else {
      if (lhs[p] !== rhs[p]) {
        result = false;
      }
    }
  });
  return result;
}

module.exports = {range: range,
                  sum: sum,
                  reverse: reverse,
                  reverseInPlace: reverseInPlace,
                  arrayToList: arrayToList,
                  listToArray: listToArray,
                  prepend: prepend,
                  nth: nth,
                  deepEqual: deepEqual};

