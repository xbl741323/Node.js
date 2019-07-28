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

// 4. 查询 users 表中的数据
// User.find(function (err, data) {
//     if (err) return console.error(err);
//     console.log("查询成功！" + data);
// })


// 用 promise 方式的封装 Mongoose 中的 find 方法
User.find().then(function (data) { 
    console.log("查询成功！" + data);
})

// 这么写可以获取所有 username 为 "喵喵" 开头的数组数据
// User.find({ username: /^喵喵1/ }, function (err, data) {
//     if (err) return console.error(err);
//     console.log(data);
// })

// 这么写可以获取 username 为 "喵喵1" 的一条对象数据，
// User.findOne({ username: '喵喵1' }, function (err, data) {
//     if (err) return console.error(err);
//     console.log(data);
// })