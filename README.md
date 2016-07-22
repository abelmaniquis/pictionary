# pictionary
# pictionary



PUBLIC:


server.js:

Here we import the modules we added to our dependencies earlier (package.json).
We also import the built-in http module to create a webserver.


var http = require('http');
var express = require('express');
var socket_io = require('socket.io');

var app = express();
app.use(express.static('public'));

var server = http.Server(app);
var io = socket_io(server);

server.listen(8080);


original main.js code

var pictionary = function() {
    var canvas, context;

    var draw = function(position) {
        context.beginPath();
        context.arc(position.x, position.y,
                         6, 0, 2 * Math.PI);
        context.fill();
    };

    canvas = $('canvas');
    context = canvas[0].getContext('2d');
    canvas[0].width = canvas[0].offsetWidth;
    canvas[0].height = canvas[0].offsetHeight;
    canvas.on('mousemove', function(event) {
        var offset = canvas.offset();
        var position = {x: event.pageX - offset.left,
                        y: event.pageY - offset.top};
        draw(position);
    });
};

var guessBox;

var onKeyDown = function(event) {
    if (event.keyCode != 13) { // Enter
        return;
    }

    console.log(guessBox.val());
    guessBox.val('');
};

guessBox = $('#guess input');
guessBox.on('keydown', onKeyDown);

$(document).ready(function() {
    pictionary();
});