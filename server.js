var net = require('net');
var HOST = '127.0.0.1';
var PORT = 9001;

var clients = [];

var server = net.createServer(function(socket) {
	
	// Add client to client list when they enter
	clients.push(socket);
	
	// Broadcast clients message (Reach rover) when it's received
	socket.on("data", function(data) {
		broadcast(data);
	});
	
	// Remove clients when they leave
	socket.on('end', function () {
		clients.splice(clients.indexOf(socket), 1);
	});
	
	function broadcast(data) {
		clients.forEach(function (client) {
			client.write(data);
		});
	
		console.log(data);
	}
	
	
});

server.listen(process.env.PORT || PORT, HOST);