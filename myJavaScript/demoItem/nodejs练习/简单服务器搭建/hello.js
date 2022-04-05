'use strict';

// 导入http模块
const http = require('http');
// console.log(http);

// 创建本地服务器来从其中接收数据
const server = http.createServer((req, resp) => {
    // 回调函数接收request和response对象
    console.log(req.method + ':' + resp.url);
    // 写入响应头：
    // HTTP 状态码: 200 : OK
    // Content Type: text/html
    resp.writeHead(200, {'Content-Type' : 'text/html'});
    // 将HTTP响应的HTML内容写入resp
    resp.end('<h1>Hello!</h1>');
});

// 服务器监听8888接口：
server.listen(8888);

console.log('Server is running at http://127.0.0.1:8888/');
