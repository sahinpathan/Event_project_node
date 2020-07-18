var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RegistrationSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    userName:String,
    role:String,
    eventsAttended:[{ type: Schema.Types.ObjectId, ref: 'Event' }]
})

module.exports = mongoose.model('Registration',RegistrationSchema)