var express = require('express')

var app = express()

var Product = require('./db')

// 用于设置跨域的操作
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', function (req, res) {
    res.send('hello express!')
})

app.get('/getProduct', function (req, res) {
    Product.find().then(function (data) {
        res.status(200).json({
            status: 0,
            message: data
        })
    })
})

app.get('/getProductById', function (req, res) {
    console.log(req.query.id)
    Product.findOne({ id: req.query.id }).then(function (data) {
        console.log(data)
        res.status(200).json({
            status: 0,
            message: data
        })
    })
})

app.listen(3300, function () {
    console.log('Server is running ... ')
})
