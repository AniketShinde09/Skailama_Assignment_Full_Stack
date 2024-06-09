const express = require("express");
const { UploadtModel } = require("../models/UploadFile");
const uploadRouter = express.Router();


uploadRouter.get("/",async(req,res)=>{
    try {
     const uploads = await UploadtModel.find();
     res.status(200).send(uploads);
    } catch (error) {
     res.status(400).send({msg:error.message});
    }
 })

 
uploadRouter.get("/:projectId",async(req,res)=>{
    const {projectId} = req.params;
    try {
     const uploads = await UploadtModel.findOne({projectId});
     res.status(200).send(uploads);
    } catch (error) {
     res.status(400).send({msg:error.message});
    }
 })

uploadRouter.post("/",async(req,res)=>{
   try {
    const newFile = await UploadtModel.create(req.body);
    res.status(200).send({msg : 'File uploaded successfully' , newFile});
   } catch (error) {
    res.status(400).send({msg:error.message});
   }
})



uploadRouter.patch("/edit/:id",async(req,res)=>{
    const {id} = req.params;

    try {
     const updateFile = await UploadtModel.findByIdAndUpdate({_id:id},req.body,{new:true});
     res.status(200).send({msg : 'File updated successfully' , updateFile});
    } catch (error) {
     res.status(400).send({msg:error.message});
    }
 })

  uploadRouter.delete("/delete/:id",async(req,res)=>{

    const {id} = req.params;

    try {
     const deletedFile = await UploadtModel.findByIdAndDelete({_id:id});
     res.status(200).send({msg : 'File deleted successfully'});
    } catch (error) {
     res.status(400).send({msg:error.message});
    }
 })

module.exports = {uploadRouter};