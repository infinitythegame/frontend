module.exports = function Grunt(grunt, options) {
  'use strict';
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: require('path').join(process.cwd(), '/grunt'), //path to task.js files, defaults to grunt dir
    init: true, //auto grunt.initConfig
    data: { //data passed into config.  Can use with <%= test %>
      test: false
    },
    jitGrunt: {
      //here you can pass options to jit-grunt (or just jitGrunt: true)
      mochacli: 'grunt-mocha-cli'
    },
    postProcess: function(config) {} //can post process config object before it gets passed to grunt
  });
};
