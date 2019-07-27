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

// 4. 进行修改操作
User.findByIdAndUpdate('5d3be1cda8c07d35f471b12d', { password: "322221" }, function (err) {
    if (err) return console.error(err);
    console.log("修改成功！");
})


