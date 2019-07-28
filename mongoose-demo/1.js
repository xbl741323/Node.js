var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 1. 连接指定数据库
mongoose.connect('mongodb://localhost/itcast', { useNewUrlParser: true });

// 2. 设计文档结构（表结构）
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

// 3. 将文档结构发布为模型
var User = mongoose.model('User', userSchema)

// var admin = new User({
//     username: '旺旺1',
//     password: '123',
//     email: '123@123.com'
// });

// 用户注册
// 1. 判断用户是否已存在
//     如果已存在，结束注册
//     如果不存在，注册（保存一条用户信息）
User.findOne({ username: '旺旺g' }).then(function (data) {
    if (data) {
        console.log("用户名已存在！" + data.username);
    } else {
        return new User({
            username: '旺旺g',
            password: '123',
            email: '123@123.com'
        }).save()

    }
}).then(function (data) {
   console.log("注册成功！"+data.username)
})
