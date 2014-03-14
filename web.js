// Load the http module to create an http server.
var http = require('http');

var static = require('node-static');

// Configure our HTTP server to respond with Hello World to all requests.
var file = new(static.Server)('app/');
var server = http.createServer(function (request, response) {
  file.serve(request, response);
});

var port = Number(process.env.PORT || 5000);

// Listen on port
server.listen(port, function() {
  console.log("Listening on " + port);
});