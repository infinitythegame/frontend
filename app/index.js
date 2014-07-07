'use strict';

var fast     = require('fast.js'),
    path     = require('path'),
    Promise  = require('bluebird'),
    express  = require('express'),
    sockjs   = require('sockjs'),
    lusca    = require('lusca'),
    rekuire  = require('rekuire');

var app = module.exports = express();

rekuire('view.js')(app, path);

app.use(express.static(__dirname + '/../web/dist'));

app.get('/', function (req, res){
  res.render('index', {
    title: 'Main page'
  });
});

app.get('/factions', function (req, res){
  res.render('factions', {
    title: 'Main page',
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

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});
