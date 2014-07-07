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

app.use(express.static(__dirname + '/../web/public'));

app.get('/', function (req, res){
  res.render('index', {
    title: 'Main page'
  });
});

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});
