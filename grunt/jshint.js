module.exports = function watch(grunt, options) {
  'use strict';
  return {
    options: {
      reporter: require('jshint-stylish')
    },
    gruntfile: ['Gruntfile.js']
  };
};
