var http = require('http')

var fs = require('fs')

var server = http.createServer()

var wwwDir = 'F:/Movie/www'

server.on('request', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    fs.readFile('./template.html', function (err, data) {
        if (err) {
            return res.end('读取文件失败！')
        }
        // 1. 如何得到 wwwDir 目录列表中的文件名和目录名
        //    fs.readdir
        // 2. 如何将得到的文件名和目录名替换到 template.html 中
        //    2.1 在 template.html 中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的标记一样）
        //    2.2 根据 files 生成需要的 HTML 内容
        // 只要你做了这两件事儿，那这个问题就解决了

        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('找不到文件目录！')
            }
            // 2.1 生成需要替换的内容
            var content = ''
            files.forEach(item => {
                // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
                content += `
          <tr>
            <td><a href="/D:/Movie/www/apple/">${item}/</a></td>
            <td>0kb</td>
            <td>2017/11/2 上午10:32:47</td>
          </tr>
        `
            })

            // 2.3 替换
            data1 = data.toString()
            data2 = data1.replace('^_^', content)
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            // 3. 发送解析替换过后的响应数据
            res.end(data2)
        })
    })

})

server.listen(3300, function () {
    console.log('Server is running ...')
})