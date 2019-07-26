/**
 * app.js 入门模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */

var express = require('express')
var router = require('./router.js') // 导入 router.js 文件
var bodyParser = require('body-parser')
var app = express()

var fs = require('fs')

app.engine('html', require('express-art-template'))
// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）,一定要在 app.use(router) 之前进行
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

// router(app,fs) // 传入参数，调用其中的路由
app.use(router) //把路由容器挂载到 app.js 服务中

app.listen(3300, function () {
    console.log('Server is running ...')
})

module.exports = app
