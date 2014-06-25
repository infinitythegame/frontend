'use strict';

var fast     = require('fast.js')
    compass  = require('compass'),
    Promise  = require("bluebird"),
    express  = require('express'),
    sockjs   = require('sockjs')
    lusca    = require('lusca'),
    app      = express();


require('./view.js');
