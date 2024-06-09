const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
       username : {type:String,required:true},
       email : {type:String,required:true},
       image : {type:String,required:true},
       created_at : {type:Date,default:Date.now},
})

const ProfileModel = mongoose.model('profile',profileSchema);

module.exports = {ProfileModel};