import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import router from "./routes/index.js";
import bodyParser from "body-parser";



 dotenv.config();
const app = express();

app.use(bodyParser.json())
app.use("/api/v1",router)



const port= process.env.PORT
const dtabase= process.env.DATABASE
 

app.listen(port,()=>{
    console.log(`database is running on ${port}`)
})
mongoose.connect(dtabase).then(()=>{
    console.log("database connected succefully")
})
.catch((error)=>{
    console.log(`database failed ${error}`)
})