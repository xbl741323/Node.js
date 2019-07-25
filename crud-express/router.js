/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */

var fs = require('fs')

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

// 1. 创建一个路由容器
var router = express.Router()
// 2. 把路由挂载到 router 路由容器中
router.get('/students', function (req, res) {
    // readFile第二个参数是可选的，可以把读取到的文件按照 utf8 的编码格式输出字符串
    // 当然你也可以通过 toString()方法来转换成字符串
    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('Server error')
        }
        var fruits = JSON.parse(data).fruits // 将字符串转换成 JSON 对象
        var students = JSON.parse(data).students // 将字符串转换成 JSON 对象
        res.render('index.html', {
            fruits: fruits,
            students: students
        })

    })
})
router.get('/students/new', function (req, res) {
    res.render('new.html')
})
router.post('/students/new', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //    将数据保存到 db.json 文件中用于持久化
    // 3. 发送相应
    // 先读取出来，转成对象
    // 然后往对象中 push 数据
    // 然后把对象转为字符串
    // 然后把字符再次写入文件

})
router.get('/students/edit', function (req, res) {

})
router.post('/students/edit', function (req, res) {

})
router.get('/students/delete', function (req, res) {

})

// 3. 把 router 导出
module.exports = router









// 这种方法也不好
// module.exports = function (app, fs) {
//     app.get('/students', function (req, res) { })

//     app.get('/students/new', function (req, res) { })

// }