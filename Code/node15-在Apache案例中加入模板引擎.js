var http = require('http')
var fs = require('fs')
var template = require('art-template')
var server = http.createServer()

var wwwDir = 'F:/Movie/www'

server.on('request', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    fs.readFile('./template-apache.html', function (err, data) {
        if (err) {
            return res.end('读取文件失败！')
        }
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('找不到文件目录！')
            }
            // 这里只需要使用模板引擎解析替换 data 中的模板字符串就可以了
            // 数据就是 files
            // 然后去你的 template.html 文件中编写你的模板语法就可以了
            var htmlStr = template.render(data.toString(), {
                files: files
            })
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(htmlStr)
        })
    })

})

server.listen(3300, function () {
    console.log('Server is running ...')
})