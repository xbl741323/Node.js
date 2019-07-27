var fs = require('fs')
var p1 = new Promise(function (reslove, reject) {
    fs.readFile('./a.txt', "utf8", function (err, data) {
        if (err) {
            reject(err)
        } else {
            reslove(data)
        }
    })
})

p1.then(function (data) {
    console.log(data)
}, function (err) {
    console.log("读取文件失败！")
})