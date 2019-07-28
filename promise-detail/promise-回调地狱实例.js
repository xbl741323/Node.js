var fs = require('fs')

// 模拟一个回调函数实例
// 1. 封装方法
function readFileByPath(fPath, callback) {
    fs.readFile(fPath, "utf8", function (err, data) {
        if (err) {
            callback(err)
        } else {
            callback(data)

        }
    })
}
// 2. 模拟回调地狱
readFileByPath('./a.txt', function (data) {
    console.log(data)
    readFileByPath('./b.txt', function (data) {
        console.log(data)
        readFileByPath('./c.txt', function (data) {
            console.log(data)
        })
    })
})



