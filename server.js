var http = require("http");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

http.createServer((req, res) => {

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World\n');
}).listen(server_port);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
