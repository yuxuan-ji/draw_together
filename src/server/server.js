var express = require('express');
var socket = require('socket.io');

var app = express();

var PORT = process.env.PORT || 8000;
var server = app.listen(PORT, function(){
    console.log('server is running on port ' + PORT);
});

var io = socket(server);

var usersList = [];

io.on('connection', (socket) => {

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    });

    socket.on('ENTER_LOBBY', function(data){
        usersList.push(data);
        io.emit('ENTER_LOBBY', usersList);
    });

    socket.on('EXIT_LOBBY', function(data){
        var index = usersList.findIndex(user => user.username===data.username);
        if (index > -1) {
          usersList.splice(index, 1);
        }
        io.emit('EXIT_LOBBY', usersList);
    });            

});
