const mongoose = require('mongoose');
const ConSchema = mongoose.Schema({
    name:String,
    email:String,
    address:String,
    image:String,
    pickupdate:String,
    dropdate:String,
    weight:Number,
    distance:Number
});
const Consin = mongoose.model('consignment',ConSchema);
module.exports = Consin;