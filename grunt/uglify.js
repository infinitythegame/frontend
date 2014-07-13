module.exports = function uglify(grunt) {
  'use strict';
  return {
    dev: {
      files: {
        'public/output.min.js': ['src/input1.js', 'src/input2.js']
      }
    }
  };
}
