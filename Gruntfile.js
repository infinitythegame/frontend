module.exports = function Grunt(grunt) {
  'use strict';
  require('time-grunt')(grunt);
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
    init: true, //auto grunt.initConfig
    data: { //data passed into config.  Can use with <%= test %>
        test: false
    },
    loadGruntTasks: { //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
        pattern: 'grunt-*',
        config: require('./package.json'),
        scope: 'devDependencies'
    },
    postProcess: function(config) {} //can post process config object before it gets passed to grunt
  });

};


module.exports = function grunt(grunt) {


  grunt.initConfig({
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all:      ['spec/**/*.js'],
      server:   ['spec/src**/*.js'],
      client:   ['spec/web/**/*.js'],
    }
  });

  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('test', ['newer:mochacli:all']);
};
