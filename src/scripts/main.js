var bespoke = require('bespoke'),
  //bullets = require('bespoke-bullets'),
  classes = require('bespoke-classes'),
  cursor = require('bespoke-cursor'),
  forms = require('bespoke-forms'),
  fullscreen = require('bespoke-fullscreen'),
  hash = require('bespoke-hash'),
  nav = require('bespoke-nav'),
  overview = require('bespoke-overview'),
  scale = require('bespoke-scale'),
  isWebKit = 'webkitAppearance' in document.documentElement.style;

var deck = bespoke.from('.deck', [
  classes(), // classes() must be first as it provides critical foundation for other plugins
  scale(isWebKit ? 'zoom' : 'transform'),
  nav(),
  fullscreen(),
  overview(),
  //bullets('li, .bullet'),
  hash(),
  cursor(),
  forms()
]);

// expose deck API to applications
window.deck = deck;
