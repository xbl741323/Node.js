var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use('/public/', express.static('./public/'))
// 配置使用 art-template 模板引擎
app.engine('html', require('express-art-template'))
// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var comments = [
    {
        name: 'admin01',
        message: 'meassage01',
        dateTime: '2019-7-17'
    },
    {
        name: 'admin02',
        message: 'meassage02',
        dateTime: '2019-7-17'
    },
    {
        name: 'admin03',
        message: 'meassage04',
        dateTime: '2019-7-17'
    },
    {
        name: 'admin04',
        message: 'meassage04',
        dateTime: '2019-7-17'
    },
    {
        name: 'admin05',
        message: 'meassage05',
        dateTime: '2019-7-17'
    },
    {
        name: 'admin06',
        message: 'meassage06',
        dateTime: '2019-7-17'
    },
    {
        name: 'admin07',
        message: 'meassage07',
        dateTime: '2019-7-17'
    },
    {
        name: 'admin08',
        message: 'meassage08',
        dateTime: '2019-7-17'
    },

]
// 如果想要修改默认的 views 目录，则可以
// app.set('views', render函数的默认路径)
app.get('/', function (req, res) {
    res.render('index.html', { // express 默认会去 views 目录中找 index.html
        comments: comments
    })
})
// 担当路由（映射关系）的作用
app.get('/post', function (req, res) {
    res.render('post.html', {
        comments: comments
    })
})

app.post('/pinglun', function (req, res) {
    // req.query 只能拿 get 请求参数
    var comment = req.body 
    var date = new Date()
    comment.dateTime = date.getFullYear() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getDay()
    comments.unshift(comment)
    res.redirect('/') // express 封装的重定向方法
    // res.send()
    // res.redirect('/') 
    // 这些方法 Express 会自动结束响应
})
// app.get('/pinglun', function (req, res) {
//     var comment = req.query 
//     var date = new Date()
//     comment.dateTime = date.getFullYear() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getDay()
//     comments.unshift(comment)
//     res.redirect('/')
// })

app.listen(3300, function () {
    console.log('Server is running ...')
})