module.exports.World = function serverWorld(callback) {
  'use strict';
  
  this.visit = function(url, callback) {
      console.log(url);
  }
  callback();
};
