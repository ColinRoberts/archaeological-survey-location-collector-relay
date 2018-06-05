var net = require('net');
var HOST = '127.0.0.1';
var PORT = 9001;

var server = net.createServer(function(socket) {
	socket.pipe(socket);
});

server.listen(process.env.PORT || PORT, HOST);