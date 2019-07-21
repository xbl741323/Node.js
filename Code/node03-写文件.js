var fs = require('fs')

// 第一个参数：文件路径
// 第二个参数： 文件内容
// 第三个参数： 回调函数
//   文件写入成功：  error是null
//   文件写入失败：  error是错误对象
fs.writeFile('./data/text.txt', "欢迎开始Node.js的学习", function (error) {
    if (error) {
        console.log("文件写入失败:" + error)
        return true
    }
    console.log('文件写入成功！')
})