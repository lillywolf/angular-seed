// Load the http module to create an http server.
var http = require('http');

var static = require('node-static');
var express = require('express');
var logfmt = require('logfmt');

var app = express();

// Configure our HTTP server to respond with Hello World to all requests.
// var file = new(static.Server)('app/');
// var server = http.createServer(function (request, response) {
//   file.serve(request, response);
// });

// app.use(logfmt.requestLogger());

// app.get('/', function(req, res) {
//   	res.send('Hello World!');
// 		file.serve(req, res);
// });

app.use(express.static(__dirname + '/app'));

var port = Number(process.env.PORT || 5000);

// Listen on port
app.listen(port, function() {
   console.log("Listening on " + port);
});