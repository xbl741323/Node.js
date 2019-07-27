var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/itcast', { useNewUrlParser: true });

var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String
    }
})

module.exports = mongoose.model('Student', studentSchema)



