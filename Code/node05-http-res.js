var http = require('http')

var server = http.createServer()

// request 请求事件处理函数，需要接收两个参数：
//   request  请求对象：可以用来获取客户端的一些请求信息，例如请求路径
//   response 响应对象：可以用来给客户端发送响应消息
server.on('request', function (request,response) {
    console.log('收到客户端的请求了！请求路径是：'+request.url)
    // response 对象有一个方法：write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
    response.write('hello')
    response.end() //告诉客户端，我的话说完了，你可以呈递给用户了
    //由于我们的服务器能力还非常的弱，无论是什么请求，都只能响应 hello 
    //思考：我们希望当请求不同的路径的时候回响应不同的结果
    //例如：/ index /login 登陆 /register 注册 ...
})

server.listen(3300, function () {
    console.log("服务器启动成功了！可以通过 http://localhost:3300/ 来进行访问")
})