var express = require('express')

var app = express()

app.use('/public/', express.static('./public/'))

app.get('/',function(req,res){
    res.send('hello express!')
})

app.listen(3300,function(){
    console.log('Server is running...')
})