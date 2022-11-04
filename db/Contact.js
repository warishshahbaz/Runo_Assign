const mongoose = require('mongoose');

const contactSheme = new mongoose.Schema({
    name:String,
    phone:String,
    age:String,
    pincode:String,
    adhar_no:String
});

module.exports = mongoose.model("contacts",contactSheme);