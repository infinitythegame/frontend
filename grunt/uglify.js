module.exports = function uglify(grunt, options) {
  'use strict';
  return {
    dev: {
      files: {
        'app/web/dist/js/': ['app/web/src/js/']
      }
    }
  };
};
