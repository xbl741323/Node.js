var fs = require('fs')

fs.readdir('F:/Movie/www', function (err, files) {
    if (err) {
        console.log('文件目录不存在' + err)
        return true
    }
    console.log(files)
})