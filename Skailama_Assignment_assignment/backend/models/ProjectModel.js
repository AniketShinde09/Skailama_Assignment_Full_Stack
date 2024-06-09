const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
       projectName : {type:String,required:true},
       created_at : {type:Date,default:Date.now}
})

const ProjectModel = mongoose.model('project',projectSchema);

module.exports = {ProjectModel};