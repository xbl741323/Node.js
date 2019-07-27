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

// 4. 删除 users 表中 username 为 "旺旺" 的所有数据
User.deleteMany({ username: '旺旺' }, function (err) {
    if (err) return console.error(err);
    console.log("删除成功！");
})
//  删除 users 表中 username 为 "旺旺" 的一条数据
// User.deleteOne({ username: '旺旺' }, function (err) {
//     if (err) return console.error(err);
//     console.log("删除成功！");
// })