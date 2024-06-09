const express = require("express");
const { ProjectModel } = require("../models/ProjectModel");
const projectRouter = express.Router();


projectRouter.get("/",async(req,res)=>{
    try {
     const projects = await ProjectModel.find();
     res.status(200).send(projects);
    } catch (error) {
     res.status(400).send({msg:error.message});
    }
 })

projectRouter.post("/create",async(req,res)=>{
   try {
    const newProject = await ProjectModel.create(req.body);
    res.status(200).send({msg : 'Project added successfully' , newProject});
   } catch (error) {
    res.status(400).send({msg:error.message});
   }
})



module.exports = {projectRouter};