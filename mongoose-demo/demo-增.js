var mongoose = require('mongoose')

var Schema = mongoose.Schema
// var Schema = new mongoose.Schema({})
// 1. 连接指定数据库
// 指定数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast', { useNewUrlParser: true });

// 2. 设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
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
// mongoose.model方法就是用来将一个架构发布为 model
// 第一个参数：传入一个大写名词单数字符串用来表示你的集合名称
//            mongoose 会自动将大写名词的字符串生成小写复数的集合名称
//            例如这里的 User 最终会变为 users 集合名称
// 第二个参数：架构 Schema
//            返回值：模型构造函数
var User = mongoose.model('User', userSchema)

// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为（crud）了
var admin = new User({
    username: '旺旺',
    password: '123',
    email: '123@123.com'
});

admin.save().then(() => console.log('增加成功！'))