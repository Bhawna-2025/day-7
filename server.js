require("dotenv").config()

const app=require("./src/app")
const connectToDb=require("./src/config/database")

connectToDb()
app.listen(4000,()=>{
    console.log("server is running on port 4000")
})