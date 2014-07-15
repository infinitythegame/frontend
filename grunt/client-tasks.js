module.exports = function testClient(grunt, options) {
  return {
    concurrent: ['newer:mochacli:client', 'newer:jshint:client'],
    mochacli : {
      options: {
        reporter: 'spec',
        bail: true
      },
      src: ['test/spechelper.js', 'spec/web/**/*.js']
    },
    jshint : ['app/web/src/js/app/**/*.js']
  };
};
