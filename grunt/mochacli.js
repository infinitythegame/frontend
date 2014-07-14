module.exports = function mochacli(grunt) {
  'use strict';
  return {
    options: {
      reporter: 'spec',
      bail: true
    },
    all:      {
      src: ['test/spechelper.js', 'spec/**/*.js']
    },
    server:   {
      src: ['test/spechelper.js', 'spec/src/**/*.js']
    },
    client: {
      src: ['test/spechelper.js', 'spec/web/**/*.js']
    }
  };
};
