const express = require("express");
const { GeneralModel } = require("../models/GeneralConfig");
const generalConfigRouter = express.Router();


generalConfigRouter.get("/",async(req,res)=>{
    try {
     const generalInfo = await GeneralModel.find();
     res.status(200).send(generalInfo);
    } catch (error) {
     res.status(400).send({msg:error.message});
    }
 })

 generalConfigRouter.post("/",async(req,res)=>{
   try {
    const newInfo = await GeneralModel.create(req.body);
    res.status(200).send({msg : 'General information successfully Added' , newInfo});
   } catch (error) {
    res.status(400).send({msg:error.message});
   }
})

generalConfigRouter.put("/edit/:id",async(req,res)=>{
    const {id} = req.params
    try {
     const  updateInfo = await GeneralModel.findByIdAndUpdate({_id:id},req.body,{new:true});
     res.status(200).send({msg : 'General information updated' , updateInfo});
    } catch (error) {
     res.status(400).send({msg:error.message});
    }
 })



module.exports = {generalConfigRouter};