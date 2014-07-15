module.exports = function watch(grunt, options) {
  return {
    scripts: {

    },

    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['jshint:gruntfile'],
    },
    src: {
      files: ['app/**/*.js', 'app/web/src/**/*.scss', '!lib/dontwatch.js'],
      tasks: ['test'],
    },
    test: {
      files: '<%= jshint.test.src %>',
      tasks: ['jshint:test', 'qunit'],
    },
  };
};
