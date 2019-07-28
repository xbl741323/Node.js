var fs = require('fs')
function readFileByPath(fPath) {
    return new Promise(function (reslove, reject) {
        fs.readFile(fPath, "utf8", function (err, data) {
            if (err) {
                reject(err)
            } else {
                reslove(data)
            }
        })
    })
}

readFileByPath('./a.txt').then(function (data) {
    console.log(data)
    return readFileByPath('./b.txt')
}, function (err) {
    console.log("文件读取失败!")
}).then(function (data) {
    console.log(data)
    return readFileByPath('./c.txt')
}).then(function (data) {
    console.log(data)
    console.log("end...再需要读取文件以此类推...")
})