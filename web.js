// Load the http module to create an http server.
var http = require('http');

var static = require('node-static');

// Configure our HTTP server to respond with Hello World to all requests.
var file = new(static.Server)('app/');
var server = http.createServer(function (request, response) {
  file.serve(request, response);
});

var port = Number(process.env.PORT || 5000);

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(port, function() {
  console.log("Listening on " + port);
});