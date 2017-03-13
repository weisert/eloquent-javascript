/*jslint node: true */
'use strict';

module.exports = {
  regexpGolf: function() {
    // Fill in the regular expressions
    //throw new Error("a");
    verify(/ca[tr]/,
           ["my car", "bad cats"],
           ["camper", "high art"]);

    verify(/p(r)?op/,
           ["pop culture", "mad props"],
           ["plop"]);

    verify(/ferr(et|y|ari)/,
           ["ferret", "ferry", "ferrari"],
           ["ferrum", "transfer A"]);

    verify(/\b\S+ious\b/,
           ["how delicious", "spacious room"],
           ["ruinous", "consciousness"]);

    verify(/ [.,:;]/,
           ["bad punctuation .", "bad :", "bad ;", "bad ,"],
           ["escape the dot"]);

    verify(/[a-z]{7,}/,
           ["hottentottententen"],
           ["no", "hotten totten tenten"]);

    verify(/\b[a-df-z]+\b/,
           ["red platypus", "wobbling nest"],
           ["earth bed", "learning ape"]);


    function verify(regexp, yes, no) {
      // Ignore unfinished exercises
      if (regexp.source == "...") return;
      yes.forEach(function(s) {
        if (!regexp.test(s))
          throw new Error("Failure to match '" + s + "'");
      });
      no.forEach(function(s) {
        if (regexp.test(s))
          throw new Error("Unexpected match for '" + s + "'");
      });
    }
    return true;
  },
  quotingStyle: function(text) {
    return text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');
  },
  isNumber: function(text) {
    return /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/.test(text);
  }
};