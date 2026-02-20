const express=require("express");
const noteModel=require("./models/notes.model.js")
const app=express()

app.use(express.json())
//  post request to create a note in database
app.post("/notes",async(req,res)=>{

    const {title,description}=req.body

    const notes=await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created successfully",
        notes
    })
})
//get request to fetch all the data from the database 
app.get("/notes",async(req,res)=>{
    const notes= await noteModel.find()
    res.status(200).json({
        message:"notes fetched successfully",
        notes
    })
})
module.exports=app