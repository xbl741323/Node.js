var x = "b"

// 这里用 exports 导出 foo 值
exports.foo = "bbb"

// 这里用 exports 导出 add 方法
function add(x, y) {
    return x + y
}
// exports.add = add

// exports = add  //这样做不行

//如果一个模块需要直接到处某个成员，就必须使用下面这种方式
module.exports = add //这样做行

// 这样也可以导出成员
module.exports = {
    fo: 'www',
    ad: function (a, b) {
        return a - b
    }
}

// 底层是这样的
var module = {
    exports: {
        fow: 'qqq',
        reduce: function (q, w) {
            return q + w
        }
    }
}

// 两者等价
 exports = module.exports 

// 最后 return 的这个
return module.exports 

// 以上理解之后，真正去使用的时候：
//  导出多个成员： exports.xxx = xxx
//  导出多个成员也可以这样写：module.exports = {}
// 导出单个成员：module.exports = xxx
