## 一. Node.js介绍

- Node.js发布于2009年5月，由Ryan Dahl(瑞恩·达尔)在GitHub上发布了最初版本的部分Node.js包，随后几个月里，有人开始使用Node.js开发应用
- Node.js是一个基于Chrome JavaScript运行时建立的平台， 是一个Javascript运行环境
- Node 是一个服务器程序, 用Javascript这个语言开发服务器
- Node.js的实质是对Chrome V8引擎进行了封装
- V8 JavaScript 引擎是 Google 用于其 Chrome 浏览器的底层 JavaScript 引擎
- 传统意义上的 JavaScript 运行在浏览器上，这是因为浏览器内核实际上分为两个部分:渲染引擎和 JavaScript 引擎。前者负责渲染 HTML + CSS，后者则负责运行 JavaScript。Chrome 使用的 JavaScript 引擎是 V8，它的速度非常快
- 参考[Node.js 究竟是什么？](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Fcn%2Fopensource%2Fos-nodejs%2F)和[Node.js的SDK文档](https://links.jianshu.com/go?to=https%3A%2F%2Fnodejs.org%2Fdist%2Flatest-v7.x%2Fdocs%2Fapi%2F)

### 1. Node.js的优缺点

- Node.js优点： 
  - 采用**事件驱动、异步编程**，为网络服务而设计。其实Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程。而且JavaScript也简单易学，很多前端设计人员可以很快上手做后端设计。
  - Node.js**非阻塞模式的IO处理**给Node.js带来在相对低系统资源耗用下的高性能与出众的负载能力，非常适合用作依赖其它IO资源的中间层服务。
  - Node.js轻量高效，可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。Node非常适合如下情况：在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。
- Node.js缺点： 
  - 可靠性低
  - 单进程，单线程，只支持单核CPU，不能充分的利用多核CPU服务器。
  - 一旦这个进程崩掉，那么整个web服务就崩掉了。

### 2. Node.js使用介绍

- Node.js使用Module模块去划分不同的功能，以简化App开发，Module就是库，跟组件化差不多，一个功能一个库。

- Node.js内建了一个HTTP服务器，可以轻而易举的实现一个网站和服务器的组合，不像PHP那样，在使用PHP的时候，必须先搭建一个Apache之类的HTTP服务器，然后通过HTTP服务器的模块加载CGI调用，才能将PHP脚本的执行结果呈现给用户

- require() 函数，用于在当前模块中加载和使用其他模块；

- **!** Node和浏览器端所支持的模块规范不同，导入导出时在语法上要格外注意：

  |          | Node                                    | 浏览器                             |
  | -------- | --------------------------------------- | ---------------------------------- |
  | 模块规范 | CommonJS                                | ES6                                |
  | 导出     | modules.exports = <br />exports.[] = {} | export {} <br />export default {}  |
  | 引入     | require(‘’)                             | require(‘’)<br />import {} form ‘’ |

## 二. Node.js模块

`Node`里面的模块系统遵循的是`CommonJS`规范。由于`js`以前比较混乱，各写各的代码，没有一个模块的概念，而这个规范出来其实就是对模块的一个定义。

> `CommonJS`定义的模块分为: 模块标识(`module`)、模块定义(`exports`) 、模块引用(`require`)

在一个node执行一个文件时，会给这个文件内生成一个 `exports`和`module`对象，
而`module`又有一个`exports`属性。他们之间的关系如下图，都指向一块`{}`内存区域。

 ![clipboard.png](https://segmentfault.com/img/bVRMVd?w=596&h=166) 

```js
//utils.js
let a = 100;

console.log(module.exports); //能打印出结果为：{}
console.log(exports); //能打印出结果为：{}

exports.a = 200; // module.exports 对象添加了内容 {a : 200}

exports = '指向其他内存区'; //这里把exports的指向重新定义了

//test.js

var a = require('/utils');
console.log(a) // 打印为 {a : 200} 
```

从上面可以看出，其实`require`导出的内容是`module.exports`的指向的内存块中的内容，与`exports`指向无关。`exports` 只是 `module.exports`的引用，用来辅助后者添加内容。

为了避免意外，一般情况下尽量用 `module.exports` 导出，用`require`导入。 

> #### ES中的模块导出导入
>
> 浏览器的ES模块结构比较清晰，导出围绕`export`关键字，导出则兼容 `require` 方法和 `import {} form ‘’` 。主要区分`export` 和 `export default` 即可。
>
> 1. export与export default均可用于导出常量、函数、文件、模块等
> 2. 在一个文件或模块中，export和import可以有多个，export default**仅有一个**
> 3. 通过export方式导出，在**导入时要加{ }**，export default则不需要
> 4. export能直接导出**变量表达式**，export default不行。

## 三. 搭建服务器

**1.安装nodejs服务(从官网下载安装)，node相当于apache服务器**

**2.在自己定义的目录下新建服务器文件如 server.js**
例如，我在E:\PhpProject\html5\websocket下创建了server.js文件

```text
var http = require('http');//引入http模块

//开启服务，监听8888端口
//端口号最好为6000以上
var server = http.createServer(function(req,res){
    /*
        req用来接受客户端数据
        res用来向客户端发送服务器数据
    */

    console.log('有客户端连接');//创建连接成功显示在后台

    //一参是http请求状态，200连接成功
    //连接成功后向客户端写入头信息
    res.writeHeader(200,{
        'content-type' : 'text/html;charset="utf-8"'
    });

    res.write('这是正文部分');//显示给客户端
    res.end();

}).listen(8888);

console.log('服务器开启成功');
```

**3.在cmd控制台中cd切换进server.js所在的目录，然后执行node server.js命令**
当控制台显示”服务器开启成功”则说明node服务器已经建立

**4.在浏览器中访问服务器**
在浏览器中输入
localhost:8888 ， 浏览器显示“这是正文部分”。
查看cmd控制台，显示 “有客户端连接”
可在多个浏览器窗口中进行以上操作，每个浏览器窗口均会对应一次“有客户端连接”

以上步骤完成，node服务搭建完毕。下面是如何通过搭建的node服务访问本地站点的 text/html文本文件

**访问本地站点文件**

1.在自定义的目录下创建node服务文件server2.js

```js
var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = 'E:/PhpProject/html5/websocket/www';
//需要访问的文件的存放目录

var server= http.createServer(function(req,res){

    var url = req.url; 
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html 

    var file = documentRoot + url;
    console.log(url);
    //E:/PhpProject/html5/websocket/www/index.html 


    fs.readFile( file , function(err,data){
    /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });



}).listen(8888);

console.log('服务器开启成功');
```



2.创建index.html文件

```text
如果要访问index.html文件，当然你得先有这个文件，不然服务器读取失败，返回404
```

3.在cmd控制台cd切换到 server2.js的目录下执行node server2.js命令
开启服务器

4.在浏览器输入localhost:8888/index.html访问 该文件

## 四. 内置对象和模块

### 1. global对象

Node.js环境中唯一的全局对象，类似js中的 `window` 对象。

### 2. process对象

`global.process` 代表当前进程， 通过`process`对象可以拿到许多有用信息： 

```js
// 1.操作工作目录
> process.cwd(); //返回当前工作目录
'/Users/michael'

> process.chdir('/private/tmp'); // 切换当前工作目录
undefined
> process.cwd();
'/private/tmp'

// 2.传入process.nextTick()的函数不会立即执行，而在下一轮事件循环中调用:
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
// nextTick was set!
// nextTick callback!

// 3.程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
// Node.js进程本身的事件就由process对象来处理。如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数
```

### 3. fs模块

`fs`模块是node内置的文件系统模块，负责读写文件。和所有其它JavaScript模块不同的是，`fs`模块**同时提供了异步和同步的方法**。 

### 4. stream模块

`stream`是Node.js提供的一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。

 [stream - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/1022910821149312/1023025800783232) 

### 5. http模块

要开发HTTP服务器程序，从头处理TCP连接、解析HTTP是不现实的。这些工作实际上已经由Node.js自带的`http`模块完成了。

应用程序并不直接和HTTP协议打交道，而是操作`http`模块提供的`request`和`response`对象。 

- `request`对象封装了HTTP请求，我们调用`request`对象的属性和方法就可以拿到所有HTTP请求的信息；

- `response`对象封装了HTTP响应，我们操作`response`对象的方法，就可以把HTTP响应返回给浏览器。

#### 实例

Node.js实现HTTP服务器：

我们实现一个简单的Web程序 `hello.js` 它对于所有请求，都返回 `Hello!` 

```js
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
// Server is running at http://127.0.0.1:8888/
```



`http.createServer([requestListener])` 是一个构造函数， 用来创建一个HTTP服务器 ,返回一个实例 `Server` 。

*[requestListener]* 请求处理函数，自动添加到 `request` 事件，传递两个参数：

​	`req` 请求对象

​	`res` 响应对象



