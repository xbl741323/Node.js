var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

var productSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

var Product = mongoose.model('Product', productSchema)

Product.findOne({ id: '1' }, function (err, data) {
    if (err) return console.error(err);
    console.log("查询成功！" + data);
})