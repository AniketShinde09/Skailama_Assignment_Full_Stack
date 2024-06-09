const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
       projectId : {type:String,required:true},
       name : {type:String,required:true},
       description : {type:String,required:true},
       created_at : {type:Date,default:Date.now},
       status : {type : String,default:"Done"}
})

const UploadtModel = mongoose.model('upload',uploadSchema);

module.exports = {UploadtModel};