import mongoose from "mongoose";

 const UserSchema = new mongoose.Schema({

    names:{ type:String, required:true, },
    email:{ type:String,required:true,},
    password:{type:String,required:true},
    role:{type:String, enum:['Client','Provider','Admin'], default:'Client',}

 })

 const User = mongoose.model("User",UserSchema)
 export  default User;