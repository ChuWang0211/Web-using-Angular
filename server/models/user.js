const mongoose = require('mongoose')
const Schema = mongoose.Schema
// mongoose.connect('localhost:3000/api', {useNewUrlParser: true, useUnifiedTopology: true});
const userSchema = new Schema({
    email: String,
    password: String,
    cart: Array,
    history: Array,
    verified: String,
    admin:Boolean,
    resetPasswordToken: String,
    resetPasswordExpires: Date
})
module.exports = mongoose.model('user',userSchema,'AngularUsers')
// this now can read delete update documents in the mongoose database