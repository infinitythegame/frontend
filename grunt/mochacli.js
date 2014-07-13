module.exports = function mochacli(grunt) {
  'use strict';
  return {
    options: {
      reporter: 'spec',
      bail: true
    },
    all:      {
      src: ['spec/spechelper.js', 'spec/**/*.js']
    },
    server:   {
      src: ['spec/spechelper.js', 'spec/src**/*.js']
    },
    client: {
      ['spec/spechelper.js', 'spec/web/**/*.js']
    } 
  }
};
