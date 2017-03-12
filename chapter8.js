/*jslint node: true */
'use strict';

module.exports = {};
var exports = module.exports;

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

exports.reliableMultiply = function(a, b) {
  var result = null;
  while (result === null) {
    try {
      result = primitiveMultiply(a, b);
    }
    catch (a) { }
  }
  return result;
};

exports.box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Заперто!");
    return this._content;
  }
};

exports.withBoxUnlocked = function(body) {
  exports.box.unlock();
  try {
    body();
  } finally {
    exports.box.lock();
  }
};
