
'use strict';

var assert = require('assert');
var chai = require('chai');
chai.use(require('chai-string'));
var expect = chai.expect;

describe('Chapter 2', function() {
  var ch = require('./chapter2');
  describe('loopTriangle', function() {
    it('should return hash triangle', function() {
      var expected = '#\n' +
                     '##\n' +
                     '###\n' +
                     '####\n' +
                     '#####\n' +
                     '######\n' +
                     '#######\n' +
                     '########\n';
      expect(ch.loopTriangle()).to.be.equal(expected);
    });
  });
  describe('fizzBuzz', function() {
    it('should return proper value', function() {
      var expected = '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n' +
                     '11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz';
      expect(ch.fizzBuzz()).to.startsWith(expected);
    });
  });
  describe('chessBoard', function() {
    it('should return a chess board', function() {
      var expected = '# # # # \n' +
                     ' # # # #\n' +
                     '# # # # \n' +
                     ' # # # #\n' +
                     '# # # # \n' +
                     ' # # # #\n' +
                     '# # # # \n' +
                     ' # # # #\n';
      expect(ch.chessBoard()).to.be.equal(expected);
    });
  });
});

describe('Chapter 4', function() {
  var ch = require('./chapter4');
  describe('range', function() {
    it('should return [] if called with 1, 10', function() {
      expect(ch.range(1, 10)).to.deep.equal(
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should use step argument', function() {
      expect(ch.range(1, 10, 2)).to.deep.equal([1, 3, 5, 7, 9]);
    });
    it('should handle negative step', function() {
      expect(ch.range(5, 2, -1)).to.deep.equal([5, 4, 3, 2]);
    });
  });
  describe('sum', function() {
    it('should accumulate every element in array', function() {
      expect(ch.sum([22, 33])).to.be.equal(55);
    });
  });
  describe('reverse', function() {
    it('should reverse an array', function() {
      var input = [[], [11], [11, 22], [11, 22, 33], [11, 22, 33, 44]];
      var expected = [[], [11], [22, 11], [33, 22, 11], [44, 33, 22, 11]];
      input.forEach(function(arr, index) {
        expect(ch.reverse(arr)).to.deep.equal(expected[index]);
      });
    });
  });
  describe('reverseInPlace', function() {
    it('should reverse an array in place', function() {
      var input = [[], [11], [11, 22], [11, 22, 33], [11, 22, 33, 44]];
      var expected = [[], [11], [22, 11], [33, 22, 11], [44, 33, 22, 11]];
      for (var arr of input)
        ch.reverseInPlace(arr);
      input.forEach(function(arr, index) {
        expect(arr).to.deep.equal(expected[index]);
      });
    });
  });
  describe('arrayToList', function() {
    it('should transform the array to list', function() {
      var input = [[], [10], [10, 20]];
      var expected = [null,
                      {value: 10, rest: null},
                      {value: 10, rest: {value: 20, rest: null}}];
      input.forEach(function(arr, index) {
        expect(ch.arrayToList(arr)).to.deep.equal(expected[index]);
      });
    });
  });
  describe('listToArray', function() {
    it('should transform the list to array', function() {
      var input = [null,
                  {value: 10, rest: null},
                  {value: 10, rest: {value: 20, rest: null}}];
      var expected = [[], [10], [10, 20]];
      input.forEach(function(list, index) {
        expect(ch.listToArray(list)).to.deep.equal(expected[index]);
      });
    });
  });
  describe('prepend', function() {
    it('should insert list item in front of given list', function() {
      var input = [10, 20, 30];
      var expected = [{value: 10, rest: null},
                      {value: 20, rest: {value: 10, rest: null}},
                      {value: 30, rest: {
                         value: 20, rest: {value: 10, rest: null}}}];
      input.reduce(function(list, value, index) {
        var current = ch.prepend(value, list);
        expect(current).to.deep.equal(expected[index]);
        return current;
      }, null);
    });
  });
  describe('nth', function() {
    it('should return value of nth element in the list', function() {
      var list = {value: 10, rest: {
                    value: 20, rest: {
                      value: 30, rest: {
                        value: 40, rest: {
                          value: 50, rest: {
                            value: 60, rest: null}}}}}};
      var input = [0, 1, 2, 3, 4, 5];
      var expected = [10, 20, 30, 40, 50, 60];
      input.forEach(function(element, index) {
        expect(ch.nth(list, element)).to.be.equal(expected[index]);
      });
    });
  });
  describe('deepEqual', function() {
    it('should check deep equality of two given objects', function() {
      var obj = {here: {is: "an"}, object: 2};
      expect(ch.deepEqual(obj, obj)).to.be.true;
      expect(ch.deepEqual(obj, {here: 1, object: 2})).to.be.false;
      expect(ch.deepEqual(obj, {here: {is: "an"}, object: 2})).to.be.true;
    });
  });



  
});
