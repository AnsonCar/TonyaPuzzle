<<<<<<< HEAD
// const http = require('http');
// const fs = require('fs');
import * as http from 'http';
import * as fs from 'fs';

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

console.log("http://localhost:8080/");
=======
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World, I am 3000");
  response.end();
}).listen(3000);
>>>>>>> 41b38da78bbe5dadc58c7b8191084efcb363932c
