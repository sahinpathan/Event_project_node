var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LoginSchema = new Schema({
   username:String,
   password:String
})

module.exports = mongoose.model('Login',LoginSchema)