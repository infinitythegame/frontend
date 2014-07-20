(function() {
    'use strict';
    var fast       = require('fast.js'),
      path       = require('path'),
      Promise    = require('bluebird'),
      express    = require('express'),
      sockjs     = require('sockjs'),
      lusca      = require('lusca'),
      rekuire    = require('rekuire'),
      traverson  = require('traverson');

    var app = module.exports = express();

    var router = express.Router();

    rekuire('view.js')(app, path);

    app.use(express.static(path.join(__dirname, '../web/dist')));

    app.locals.googleAnalyticsAccount = "wibble";

    rekuire('controllers/routes.js')(app, router, rekuire);

})();
