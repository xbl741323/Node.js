// 用来获取机器信息
var os = require('os')

// 用来获取操作路径
var path = require('path')

// 获取电脑的 cpu 的相关信息
// console.log(os.cpus())

//获取当前电脑的内存大小
console.log(os.totalmem())

// 获取文件路径中的扩展名部分
console.log(path.extname('hello.txt'))