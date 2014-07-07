
module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    uglify: {
      dev: {
        files: {
          'public/output.min.js': ['src/input1.js', 'src/input2.js']
        }
      }
    }
  });
};
