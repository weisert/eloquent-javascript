/*jshint expr: true*/
/*jslint node: true */
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

describe('Chapter 3', function() {
  var ch = require('./chapter3');
  describe('min', function() {
    it('should return minimum value', function() {
      expect(ch.min(0, 10)).to.be.equal(0);
      expect(ch.min(0, -10)).to.be.equal(-10);
    });
  });
  describe('isEven', function() {
    it('should test if the argument is even', function() {
      expect(ch.isEven(50)).to.be.true;
      expect(ch.isEven(75)).to.be.false;
    });
    it('should also work with negative parameter', function() {
      expect(ch.isEven(-1)).to.be.false;
      expect(ch.isEven(-50)).to.be.true;
      expect(ch.isEven(-75)).to.be.false;
    });
  });
  describe('countBs', function() {
    it('should count \'B\' in the string', function() {
      expect(ch.countBs('BBC')).to.be.equal(2);
      expect(ch.countBs('BbBbCbb')).to.be.equal(2);
      expect(ch.countBs('bbbbCbb')).to.be.equal(0);
    });
  });
  describe('countChar', function() {
    it('should count letters in the string', function() {
      expect(ch.countChar("kakkerlak", "k")).to.be.equal(4);
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
      for (var i = 0; i < input.length; i++)
        ch.reverseInPlace(input[i] );
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

describe('Chapter 5', function() {
  var ch = require('./chapter5');
  describe('flat', function() {
    it('should create flat array', function() {
      var expected = [1, 2, 3, 4, 5, 6, 7];
      var input = [[], [1], [2, 3], [4, 5, 6], [], [7]];
      expect(ch.flat(input)).to.deep.equal(expected);
    });
  });
  describe('motherChildAgeDiff', function() {
    it('should calculate mother-child age difference', function() {
      expect(ch.motherChildAgeDiff()).to.be.within(31.15, 31.25);
    });
  });
  describe('historicalLifeExpectancy', function() {
    it('should calculate historical life expectancy', function() {
      var expected = {16: 43.5, 17: 51.2, 18: 52.8,
                      19: 54.8, 20: 84.7, 21: 94};
      expect(ch.historicalLifeExpectancy()).to.deep.equal(expected);
    });
  });
  describe('every', function() {
    it('should return true if every element pass', function() {
      expect(ch.every([NaN, NaN, NaN], isNaN)).to.be.true;
      expect(ch.every([NaN, NaN, 4], isNaN)).to.be.false;
    });
  });
  describe('some', function() {
    it('should return true if at least one element pass', function() {
      expect(ch.some([NaN, 3, 4], isNaN)).to.be.true;
      expect(ch.some([2, 3, 4], isNaN)).to.be.false;
    });
  });
});

describe('Chapter 6', function() {
  var ch = require('./chapter6');
  describe('Vector', function() {
    it('should have Vector type definition', function() {
      var vec = new ch.Vector(10, 20);
      expect(vec.x).to.be.equal(10);
      expect(vec.y).to.be.equal(20);
    });
    it('should have plus method', function() {
      var res = new ch.Vector(10, 20).plus(new ch.Vector(1, 5));
      expect(res instanceof ch.Vector).to.be.true;
      expect(res.x).to.be.equal(11);
      expect(res.y).to.be.equal(25);
    });
    it('should have minus method', function() {
      var res = new ch.Vector(10, 20).minus(new ch.Vector(1, 5));
      expect(res instanceof ch.Vector).to.be.true;
      expect(res.x).to.be.equal(9);
      expect(res.y).to.be.equal(15);
    });
    it('should have length property', function() {
      expect(new ch.Vector(3, 4).length).to.be.equal(5);
      expect(new ch.Vector(60, 80).length).to.be.equal(100);
    });
  });
  describe('StretchCell', function() {
    it('should have TextCell methods', function() {
      var cell = new ch.StretchCell(new ch.TextCell('abc'), 1, 2);
      expect(cell.minWidth()).to.be.equal(3);
      expect(cell.minHeight()).to.be.equal(2);
      expect(cell.draw(3, 2)).to.deep.equal(["abc", "   "]);
    });
  });
  describe('ArraySeq', function() {
    it('should give an access to elements', function() {
      var seq = new ch.ArraySeq([1, 2, 3]);
      expect(seq.hasNext()).to.be.true;
      expect(seq.next()).to.be.equal(1);
      expect(seq.hasNext()).to.be.true;
      expect(seq.next()).to.be.equal(2);
      expect(seq.hasNext()).to.be.true;
      expect(seq.next()).to.be.equal(3);
      expect(seq.hasNext()).to.be.false;
    });
  });
  describe('logFive', function() {
    it('should write at most five elements to log', function() {
      var output = [];
      ch.logFive(new ch.ArraySeq([1, 2]), function(arg) {
        output.push(arg);
      });
      expect(output).to.deep.equal([1, 2]);
      output = [];
      ch.logFive(new ch.ArraySeq([1, 2, 3, 4, 5, 6, 7]), function(arg) {
        output.push(arg);
      });
      expect(output).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });
  describe('RangeSeq', function() {
    it('should create a sequence with interface like ArraySeq', function() {
      var seq = new ch.RangeSeq(100, 104);
      expect(seq.hasNext()).to.be.true;
      expect(seq.next()).to.be.equal(100);
      expect(seq.hasNext()).to.be.true;
      expect(seq.next()).to.be.equal(101);
      expect(seq.hasNext()).to.be.true;
      expect(seq.next()).to.be.equal(102);
      expect(seq.hasNext()).to.be.true;
      expect(seq.next()).to.be.equal(103);
      expect(seq.hasNext()).to.be.true;
      expect(seq.next()).to.be.equal(104);
      expect(seq.hasNext()).to.be.false;
    });
  });
});

describe('Chapter 7', function() {
  var Vector = require('./chapter6').Vector;
  var ch = require('./chapter7');
  var Grid = ch.Grid;
  describe('Grid', function() {
    it('should have undefined fields', function() {
      var grid = new Grid(5, 5);
      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
          expect(grid.get(new Vector(i, j))).to.be.undefined;
        }
      }
    });
    it('should be able to set object in position', function() {
      var grid = new Grid(5, 5);
      grid.set(new Vector(1, 1), 'X');
      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
          if (i === 1 && j === 1)
            expect(grid.get(new Vector(i, j))).to.be.equal('X');
          else
            expect(grid.get(new Vector(i, j))).to.be.undefined;
        }
      }
    });
  });
});

describe('Chapter 8', function() {
  var ch = require('./chapter8');
  describe('reliableMultiply', function() {
    it('should never throw', function() {
      for (var i = 0; i < 100; ++i) {
        for (var j = 0; j < 100; ++j) {
          expect(ch.reliableMultiply(i, j)).to.be.equal(i*j);
        }
      }
    });
  });
  describe('withBoxUnlocked', function() {
    it('the box should locked', function() {
      expect(ch.box.locked).to.be.true;
    });
    it('is impossible to open box directly', function() {
      expect(function() {
        ch.box.content.push('gold');
      }).to.throw(Error);
    });
    it('should give an access to the box', function() {
      ch.withBoxUnlocked(function() {
        ch.box.content.push('gold');
      });
      expect(ch.box.locked).to.be.true;
    });
    it('should lock the box in case of error', function() {
      try {
        ch.withBoxUnlocked(function() {
          throw new Error("Pirates");
        });
      } catch (a) {}
      expect(ch.box.locked).to.be.true;
    });
  });
});
