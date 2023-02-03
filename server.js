let http = require('http');
let fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

// http://127.0.0.1:8080/
// http://localhost:8080/