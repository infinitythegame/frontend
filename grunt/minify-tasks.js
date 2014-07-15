module.exports = function minify(grunt, options) {
  return {
    verbosity: {
      options: {
        mode: 'hidden'
      },
      tasks: ['concurrent:minify', 'sass:minify', 'uglify:minify', 'notify:minify']
    },
    concurrent: ['uglify:minify', 'sass:minify'],
    uglify: {

    },
    sass: {

    },
    notify: {
      options: {
        message: 'Minified CSS and JS'
      }
    }
  };
};
