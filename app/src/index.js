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

  rekuire('view.js')(app, path);

  app.use(express.static(path.join(__dirname, '../web/dist')));

  app.locals.googleAnalyticsAccount = "wibble";

  app.route('/').get(function (req, res){
    res.render('index', {
      title: 'Main page'
    });
  });

  app.get('/factions', function (req, res){
    res.render('factions', {
      title: 'Factions',
      factions: [
        {
          name: "Ariadna",
          link: "/factions/ariadna",
          id: "ariadna"
        },
        {
          name: "Aleph",
          link: "/factions/aleph",
          id: "aleph"
        },
        {
          name: "Haqqislam",
          link: "/factions/haqqislam",
          id: "haqqislam"
        }
      ]
    });
  });

})();
