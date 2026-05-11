const mongoose = require('mongoose');
const FarmerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const FarmerModel = mongoose.model('Farmer',FarmerSchema);
module.exports = FarmerModel;