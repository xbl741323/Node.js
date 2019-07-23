// art-template
// art-template 不仅可以在浏览器中使用，也可以在 node 中使用

// 安装：
//      npm i art-template
//      该命令在哪执行就会把包下载到哪里，默认会下载到 node_modules 目录中
//      node_modules 不要改，也不支持改

// 在 Node 中使用 art-template 模板引擎
// 模板引擎最早就是诞生于服务器领域，后来才发展到了前端

//1. 安装 npm i art-template
//2. 在需要使用的文件模块中加载 art-template
//    只需要使用 require 方法加载就可以了：require('art-template')
//    参数中的 art-template 就是你下载的包的名字
//    也就是说，install 的名字是什么，则你 require 中的就是什么
//3. 查文档，使用模板引擎的 API

var template = require('art-template')
var fs = require('fs')
// 这里不是浏览器，不能这么用
// template('script标签id',{对象})

// var tplStr = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//     <p> 姓名 {{ name }} </p>
//     <p> 年龄 {{ age }} </p>
//     <p> 地址 {{ provice }} </p>
//     <p> 爱好 {{each hobbies}} {{ $value }} {{/each}} </p>
// </body>
// </html>
// `
fs.readFile('./tpl.html',function(err,data){
     if(err){
        return  console.log('读取文件失败！')
     }
     // 默认读取到的 data 是二进制数据
     // 而模板引擎的 render 方法需要接收的是字符串
     // 所以我们在这里需要把 data 二进制数据转为字符串才可以给模板引擎使用
     var ret = template.render(data.toString(),{
        name: 'tom',
        age: 18,
        provice: '安徽',
        hobbies: [
            '写代码',
            '看动漫',
            '看电影',
            '吃'
        ],
        title: '个人信息'
    })
    console.log(ret)
})


