var mongoose = require('mongoose');

var Bookschema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    publish_date: Date,
    publisher: String,
    update_date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Book',Bookschema);