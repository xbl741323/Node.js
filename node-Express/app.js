var express = require('express')

var app = express()

// 开放 public目录 公共资源,这种用的最多
app.use('/public/', express.static('./public/'))
// 这里 前面的 public 可以省略，也可以取别名
// app.use( express.static('./public/'))
// app.use('/a/', express.static('./public/'))

// 担当路由（映射关系）的作用
app.get('/',function(req,res){
    res.send('hello express!')
})

app.listen(3300,function(){
    console.log('Server is running...')
})