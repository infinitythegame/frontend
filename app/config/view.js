(function() {
  'use strict';
  module.exports = function(app, path) {
    var hogan = require('hogan-express');

    var viewsDir = '/app/views';

    var mustlayout = require('mustlayout');
    mustlayout.engine(app, {
        engine: hogan,
        ext: '.mustache',
        views: viewsDir,
        partials: path.join(viewsDir, '/partials'), // optional, default to '/views'
        layouts: path.join(viewsDir, '/layouts'), // optional, default to '/views'
        cache:'/app/cache/views' // optional, default to '/views/cache'
    });
  }
})();
