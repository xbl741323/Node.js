/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 *
 * 这里才是我们学习 Node 的精华部分：奥义之所在
 * 封装异步 API
 */
var fs = require('fs')
var dbPath = './db.json'

// 获取所有学生信息列表，return []
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

// 添加保存学生信息
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        // 处理 id 唯一的，不重复
        student.id = students[students.length - 1].id + 1
        // 把用户传递的对象保存到数组中
        students.push(student)
        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给他
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null 
            callback(null)
        })
    })
}

// 更新学生信息
exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        // 注意：这里记得把 id 统一转换为数字类型
        student.id = parseInt(student.id)
        // 你要修改谁，就需要把谁找到
        // Es6 中的一个数组方法：find
        // 需要接受一个函数作为参数
        // 当某个遍历项满足 item.id === student.id 时，find会终止，并返回这个遍历项对象
        var stu = students.find(function (item) {
            return item.id === student.id
        })
        // 遍历拷贝对象
        for (var key in student) {
            stu[key] = student[key]
        }
        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给他
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null 
            callback(null)
        })

    })
}

// 删除学生信息
exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students     
        var deleteId = students.findIndex(function (item) {
            return item.id === parseInt(id)
          })
        students.splice(deleteId,1)
        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给他
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null 
            callback(null)
        })
    })
}

// 根据 id 查找学生信息
exports.findStudentById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var stu = students.find(item => {
            return item.id === id
        })
        callback(null, stu)
    })
}