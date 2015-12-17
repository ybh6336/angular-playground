var static = require('node-static');
var http = require('http');
var file = new static.Server('./');
var server = http.createServer(function(request, response) {
	request.addListener('end', function() {
		file.serve(request, response);
	}).resume();
});

server.listen(8000);
