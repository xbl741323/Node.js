var http = require('http')
var fs = require('fs')
var server = http.createServer()

server.on("request", function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    fs.readFile('./resource/index.html', function (error, data) {
        if (error) {
            console.log("文件读取错误:" + error)
        }else{
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(data) //res.end() 支持两种数据类型，一种是二进制，一种是字符串
        }
    })




})

server.listen(3300, function () {
    console.log('Server is running ...')
})