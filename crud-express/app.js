var express = require('express')

var app = express()

var fs = require('fs')

app.engine('html', require('express-art-template'))

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.get('/', function (req, res) {
    // readFile第二个参数是可选的，可以把读取到的文件按照 utf8 的编码格式输出字符串
    // 当然你也可以通过 toString()方法来转换成字符串
    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('Server error')
        }
        var fruits = JSON.parse(data).fruits // 将字符串转换成 JSON 对象
        var students = JSON.parse(data).students // 将字符串转换成 JSON 对象
        res.render('index.html', {
            fruits: fruits,
            students: students
        })

    })
})

app.listen(3300, function () {
    console.log('Server is running ...')
})