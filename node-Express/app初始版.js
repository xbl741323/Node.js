// 0. 安装
// 1. 引包
var express = require('express')
var fs = require('fs')
// 2. 创建你的服务器应用程序
//   也就是原来的 http.createServer
var app = express()

// 在 Express 中开放资源就是一个 API 的事
// 公开指定目录
// 只要这样做了，你就可以通过 /public/xx 的形式访问 public 中目录中的所有资源了
app.use('/public/', express.static('./public/'))

// 当服务器收到 get 请求 / 的时候，执行回调处理函数
// 这里不用一个个判断路径了，很方便
app.get('/', function (req, res) {
    res.send('hello express!')
})

app.get('/pinglun', function (req, res) {
    //   req.query 可以直接拿到请求对象
})


app.get('/about', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h3>你好！</h3>
    </body>
    </html>`) //字符编码问题框架已经帮你解决了
})

app.get('/main', function (req, res) {
    fs.readFile('./main.html',function(err,data){
        res.end(data)
    })
})

// 相当于 server.listen
app.listen(3300, function () {
    console.log('app is running at port 3300')
})

