//  require 方法有两个作用：
//     1. 拿到文件模块并执行里面的代码
//     2. 拿到被加载文件模块导出的接口对象

// 在每一个文件模块中都提供了一个对象：exports
// exports 默认是一个空对象
// 你要做的就是把所有需要被外部访问到的成员用 exports 导出即可

var out = require("./b")

// console.log(out.foo) // 获得 foo 并输出其值

// console.log(out.add(1,2)) // 获得 add 方法并调用

console.log(out)