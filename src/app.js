const express=require("express");
const noteModel=require("./models/notes.model.js")
const app=express()

app.use(express.json())

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

module.exports=app