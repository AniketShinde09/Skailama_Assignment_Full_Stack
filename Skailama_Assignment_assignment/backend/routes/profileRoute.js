const express = require("express");
const { ProfileModel } = require("../models/ProfileModel");
const profileRouter = express.Router();
const multer = require("multer")
const path = require("path");

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        return cb(null,path.join(__dirname, '../Images'))
    },
    filename : function(req,file,cb){
        return cb(null,Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage,
}).single('image')


profileRouter.get("/",async(req,res)=>{
    try {
     const profiles = await ProfileModel.find();
     res.status(200).send(profiles);
    } catch (error) {
     res.status(400).send({msg:error.message});
    }
 })

 profileRouter.post("/create",upload,async(req,res)=>{
    const imagePath = `/Images/${req.file.filename}`;
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
   try {
    const newProfile = await ProfileModel.create({...req.body,image:imagePath});
    res.status(200).send({msg : 'Profile created successfully' , newProfile});
   } catch (error) {
    res.status(400).send({msg:error.message});
   }
})

module.exports = {profileRouter};