var http = require('http')

var server = http.createServer()

server.on("request", function (req, res) {
    // 服务器默认发送的数据，其实是 utf-8 编码的内容
    // 但是浏览器不知道你是 utf-8 编码的内容
    // 浏览器在不知道服务器响应内容编码的情况下会按照当前操作系统的默认编码去解析
    // 中文操作系统默认是 gbk 
    // 解决方法：告诉浏览器你发送内容的编码类型
    // 在 http 协议中，Content-Type 就是用来告诉对方我给你发送的数据内容是什么类型
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    var products = [
        {
            'name': '华为',
            'price': 3000
        },
        {
            'name': '苹果',
            'price': 6000
        },
        {
            'name': '三星',
            'price': 4000
        }
    ]
    if (req.url === '/plain') {
        res.end(JSON.stringify(products))
    } else if (req.url === '/html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<p> 这是p标签里的内容 </p><a href="#">链接</>')
    } else{
        res.end('hello')
    }

})

server.listen(3300, function () {
    console.log('Server is running ...')
})