const http = require('http');
const httpProxy = require('http-proxy');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 读取 index.html 文件
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) {
      // 如果读取文件失败，返回 500 状态码和错误信息
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error loading index.html');
      return;
    }
    // 如果成功，返回 HTML 文件
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

目标服务器的地址和端口
const target = {
  host: '127.0.0.1',
  port: 3000
};

// const target = {
//   host: '8.210.138.160',
//   port: 3000
// };

// 新建一个代理服务器
const proxy = httpProxy.createProxyServer();

// 创建一个HTTP服务器，监听客户端请求
const server2 = http.createServer((req, res) => {
  proxy.web(req, res, {
    target: target
  });
});

// 监听端口
server.listen(3000, '8.210.138.160', () => {
  console.log('Server running on http://8.210.138.160:3000/');
});

// console.log('Server running at http://localhost:8080/');

// 如果您的公共IP地址已经绑定了一个域名，
// 那么您可以使用该域名来访问代理服务器，
// 例如：http://yourdomain.com:8080。
// 如果您没有绑定域名，则需要使用公共IP地址来访问代理服务器，例如：http://yourpublicip:8080。