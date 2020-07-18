var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EventSchema = new Schema({
   title:String,
   startDate:Date,
   endDate:Date,
   image:String,
   type:String,
   description:String
})

module.exports = mongoose.model('Event',EventSchema)