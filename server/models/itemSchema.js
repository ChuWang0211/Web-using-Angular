const mongoose = require('mongoose')
const Schema = mongoose.Schema
// mongoose.connect('localhost:3000/api', {useNewUrlParser: true, useUnifiedTopology: true});
const itemSchema = new Schema({
    name:String,
    description:String,
    date:String,
    imageUrl:String,
    amount: Number,
    price:String
})
module.exports = mongoose.model('storeList',itemSchema,'AngularStorelist')
// this now can read delete update documents in the mongoose database