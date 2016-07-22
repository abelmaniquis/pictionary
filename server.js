var http =require('http');
var express = require('express');
var socket_io = require('socket.io');

var app = express();
//tell express to look in public directory for requested files.
app.use(express.static('public'));


//Start a server and initialize socket.io
var server = http.Server(app);
var io = socket_io(server);
server.listen(8080);