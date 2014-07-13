(function() {
  'use strict';
  function Faction(repository) {
    function getRepository() {
      return repository;
    }
  }
  Faction.prototype.getFactions = function() {
    return this.getRepository().getFactions();
  };
  module.exports = Faction;
})();
