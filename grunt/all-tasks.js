module.exports = function allTests(grunt, options) {
  return {
    uglify: {
      files: {
        'public/output.min.js': ['src/input1.js', 'src/input2.js']
      }
    },
  };
};
