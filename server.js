const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('/root/TonyaPuzzle/index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
