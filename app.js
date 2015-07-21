var express = require('express');
var mongoose = require('mongoose');
var vilain = require('./app/models/vilain.js');

var app = express();
var server_port = 3000;

var server = app.listen(server_port);