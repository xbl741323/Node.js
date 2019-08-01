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

var product = new Product({
    id:'3',
    pname: '苹果',
    price: 7000,
});

product.save().then(() => console.log('增加成功！'))