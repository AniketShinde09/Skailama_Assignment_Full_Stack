const mongoose = require("mongoose");

const generalSchema = new mongoose.Schema({
       chatbotname : {type:String,required:true},
       welcomemsg : {type:String},
       inputmsg : {type:String},
       created_at : {type:Date,default:Date.now},
})

const GeneralModel = mongoose.model('general',generalSchema);

module.exports = {GeneralModel};