module.exports = function ArmyListSteps() {
  'use strict';
  var rekuire = require('rekuire');
  this.World = rekuire('../support/world/server.js').World;

  this.Given(/^I have not yet selected a faction$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I select 'Haqqislam'$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    target = '/factions/haqqislam';

    this.visit(target, callback);
    callback.pending();
  });

  this.Then(/^I should see a list of Haqqislam units$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};
