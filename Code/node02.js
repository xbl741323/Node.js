//浏览器中的 javascript 是没有文件操作能力的
//但是 node 中的javascript 具有文件操作的能力

//fs 是 file-system 的简写，就是文件系统的意思
//在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块
//在 fs 这个核心模块中，提供了所有的文件操作相关的 API
//例如： fs.readFile 就是用来读取文件的

//1.使用 require 方法加载 fs 核心模块
var fs = require('fs')

//2.读取文件
// 第一个参数就是要读取的文件路径
// 第二个参数是一个回调函数
//    读取文件成功  data 数据  error null
//    读取文件失败  data null  error 错误对象
fs.readFile('./data/hello.txt', function (error, data) {
    //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>
    //文件中默认存储的是二进制数据 0 1
    //这里为什么看到的不是 0 和 1呢？因为二进制转为了十六进制
    //无论是二进制还是十六进制，人类都不认识
    //所以我们可以通过 toString 方法把其转化成我们能认识的字符
    // console.log(data)
    console.log(data.toString())
})