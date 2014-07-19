module.exports = function testTasks(grunt, options) {
  'use strict';
  return {
    concurrent: ['notify:test', 'test:client', 'test:server'],
    notify : {
      options : {
        message: 'Testing full site'
      }
    }
  };
};
