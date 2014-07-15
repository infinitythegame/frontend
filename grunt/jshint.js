module.exports = function watch(grunt, options) {
  return {
    options: {
      reporter: require('jshint-stylish')
    },
    gruntfile: ['Gruntfile.js']
  };
};
