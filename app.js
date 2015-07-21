var express = require('express');
var mongoose = require('mongoose');
var vilain = require('./app/models/vilain.js');

var routes = require('./routes/routes.js');
var app = express();
var server_port = 3000;

var server = app.listen(server_port);

app.set('view engine', 'jade');

app.get('/', routes.index);
app.get('/c', routes.create);