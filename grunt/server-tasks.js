module.exports = function testServer(grunt, options) {
  return {
    concurrent: ['newer:mochacli:server', 'newer:jshint:server'],
    mochacli : {
      options: {
        reporter: 'nyan',
        bail: true
      },
      src: ['test/spechelper.js', 'spec/src/**/*.js']
    },
    jshint : ['app/src/**/*.js']
  };
};
