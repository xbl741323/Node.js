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
var p2 = new Promise(function (reslove, reject) {
    fs.readFile('./b.txt', "utf8", function (err, data) {
        if (err) {
            reject(err)
        } else {
            reslove(data)
        }
    })
})
var p3 = new Promise(function (reslove, reject) {
    fs.readFile('./c.txt', "utf8", function (err, data) {
        if (err) {
            reject(err)
        } else {
            reslove(data)
        }
    })
})

p1.then(function (data) {
    console.log(data)
    // 当p1读取成功的时候
    // 当前函数中 return 的结果就可以在后面的 then 中的 function 中接收到，后面的以此类推
    return p2
}, function (err) {
    console.log("读取文件失败！") 
}).then(function (data) {
    console.log(data)
    return p3
}).then(function (data) {
    console.log(data)
    console.log('end')
})