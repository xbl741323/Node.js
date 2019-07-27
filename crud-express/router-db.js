/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */

var Student = require('./student-db') // 引入 mongodb 数据库对象
// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

// 1. 创建一个路由容器
var router = express.Router()
// 2. 把路由挂载到 router 路由容器中
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('index.html', {
            fruits: [
                "香蕉",
                "苹果",
                "橘子",
                "菠萝"
            ],
            students: students
        })

    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    var student = new Student(req.body)
    student.save(function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
    })
    res.redirect('/students')
})

// replace
//      字符串模式
//           简单，但是不支持全局和忽略大小写问题
//      正则表达式
//           强大，支持全局和忽略大小写问题
router.get('/students/edit', function (req, res) {
    Student.findById((req.query.id).replace(/"/g, ''), function (err, stu) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('edit.html', {
            student: stu
        })

    })
})

router.post('/students/edit', function (req, res) {
    var id = (req.body.id).replace(/"/g, '') // 注意: 这里可以不加 .replace(/"/g, '') ，因为你前端页面就是 $value.id,如果你前端页面是 $value._id,那么你就需要加了
    Student.findByIdAndUpdate(id, req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
    })
    res.redirect('/students')
})

router.get('/students/delete', function (req, res) {
    Student.findByIdAndDelete((req.query.id).replace(/"/g, ''), function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
    })
    res.redirect('/students')
})

// 3. 把 router 导出
module.exports = router










// 这种方法也不好
// module.exports = function (app, fs) {
//     app.get('/students', function (req, res) { })

//     app.get('/students/new', function (req, res) { })

// }