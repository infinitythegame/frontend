'use strict';

module.exports = function(app, path) {
  var hogan = require('hogan-express');

  var views_dir = '/app/views';

  var mustlayout = require('mustlayout');
  mustlayout.engine(app, {
      engine: hogan,
      ext: '.mustache',
      views: views_dir,
      partials: path.join(views_dir, '/partials'), // optional, default to '/views'
      layouts: path.join(views_dir, '/layouts'), // optional, default to '/views'
      cache: path.join(views_dir, '/cache') // optional, default to '/views/cache'
  });
}
