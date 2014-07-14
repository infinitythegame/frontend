(function() {
  'use strict';
  var chai      = require('chai');
  var sinonChai = require("sinon-chai");

  global.expect   = chai.expect;
  global.rekuire  = require('rekuire');
  global.sinon    = require('sinon');
  chai.use(sinonChai);
})();
