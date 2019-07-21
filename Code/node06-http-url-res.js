var http = require('http')

// 1.创建 server
var server = http.createServer()

// 2.监听 request 请求事件，设置请求处理函数
server.on('request', function (req, res) {
    console.log('收到客户端的请求了！请求路径是：' + req.url)
    // res.write('hello')
    // res.end() 
    // 上面的方式比较麻烦，推荐使用更简单的方式，直接 end 的同时发送响应数据
    // res.end("hello world")

    //根据不同的请求路径发送不同的响应结果
    // 1.获取请求路径
    //     res.url 获取到的是端口号之后的那一部分路径
    //     也就是说所有的 url 都是以 / 开头的
    // 2.判断路径处理结果
    var url = req.url
    // if (url === '/') {
    //     res.end("index page")
    // } else if (url === "/login") {
    //     res.end("login page")
    // } else {
    //     res.end("404 Not Found")
    // }
    if(url === '/products'){
        var products = [
            {
                name:'苹果',
                price:8888
            },
            {
                name:'vivo',
                price:3300
            },
            {
                name:'oppo',
                price:3300
            }
        ]
        // 响应的内容只能是二进制数据或者字符串
        // 数字 对象 数组 布尔值
        res.end(JSON.stringify(products))
    }

})

// 3.绑定端口号，启动服务
server.listen(3300, function () {
    console.log("服务器启动成功了！可以通过 http://localhost:3300/ 来进行访问")
})