/*jslint node: true */
'use strict';

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.minus = function(other) {
  return new Vector(this.x - other.x, this.y - other.y);
};

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function StretchCell(cell, width, height) {
  this.cell = cell;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.cell.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.cell.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
  return this.cell.draw(width, height);
};

function ArraySeq(array) {
  this.array = array;
  this.pos = 0;
}

ArraySeq.prototype.hasNext = function() {
  return this.pos < this.array.length;
};
ArraySeq.prototype.next = function() {
  var result = this.array[this.pos];
  this.pos++;
  return result;
};

function logFive(seq, log) {
  var cnt = 0;
  while (cnt < 5 && seq.hasNext()) {
    cnt++;
    log(seq.next());
  }
}

function RangeSeq(from, to) {
  this.pos = from;
  this.to = to;
}

RangeSeq.prototype.hasNext = function() {
  return this.pos <= this.to;
};
RangeSeq.prototype.next = function() {
  var result = this.pos;
  this.pos++;
  return result;
};

module.exports = {Vector: Vector,
                  TextCell: TextCell,
                  StretchCell: StretchCell,
                  ArraySeq: ArraySeq,
                  logFive: logFive,
                  RangeSeq: RangeSeq};
