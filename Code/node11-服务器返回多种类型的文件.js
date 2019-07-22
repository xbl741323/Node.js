// 1. 结合 fs 发送文件中的数据
// 2. Content-type
//     http://tool.oschina.net/commons
//     不同的资源对应的 Content-Type 是不一样的
//     一般只为字符数据才指定编码
var http = require('http')
var fs = require('fs')
var server = http.createServer()

server.on("request", function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    if(req.url === '/html'){
        fs.readFile('./resource/index.html', function (error, data) {
            if (error) {
                console.log("文件读取错误:" + error)
            }else{
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data) //res.end() 支持两种数据类型，一种是二进制，一种是字符串
            }
        })
    }else if(req.url === '/jpg'){
        fs.readFile('./resource/1.jpg', function (error, data) {
            if (error) {
                console.log("文件读取错误:" + error)
            }else{
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data) 
            }
        })
    }else if(req.url === '/js'){
        fs.readFile('./resource/main.js', function (error, data) {
            if (error) {
                console.log("文件读取错误:" + error)
            }else{
                res.setHeader('Content-Type', 'application/x-javascript; charset=utf-8')
                res.end(data) //res.end() 支持两种数据类型，一种是二进制，一种是字符串
            }
        })
    }else if(req.url === '/txt'){
        fs.readFile('./resource/test.txt', function (error, data) {
            if (error) {
                console.log("文件读取错误:" + error)
            }else{
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end(data) //res.end() 支持两种数据类型，一种是二进制，一种是字符串
            }
        })
    }else if(req.url === '/css'){
        fs.readFile('./resource/index.css', function (error, data) {
            if (error) {
                console.log("文件读取错误:" + error)
            }else{
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data) //res.end() 支持两种数据类型，一种是二进制，一种是字符串
            }
        })
    }else{
        res.end('Not found ...')
    }
   




})

server.listen(3300, function () {
    console.log('Server is running ...')
})