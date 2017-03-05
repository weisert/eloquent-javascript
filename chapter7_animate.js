/*jslint node: true */
/*jshint browser: true */
'use strict';

var ch = require('./chapter7');
var valley = ch.valley;
var valleyWithSmartPlantEaters = ch.valleyWithSmartPlantEaters;
var valleyWithTigers = ch.valleyWithTigers;

animateWorld(valleyWithTigers);

function animateWorld(world) {
  console.log(world.toString());

  setInterval(function() {
    world.turn();
    console.log(world.toString());
  }, 1000);
}
