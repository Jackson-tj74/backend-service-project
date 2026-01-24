
import mongoose from "mongoose";


const userSchema = mongoose.Schema({

    names:{
        type:String,
        require:[true,"please enter your name"]

    },

    email:{
        type:String,
        require:[true,"please enter your email"]
        
    },

    password:{
        type:String,
        require:[true,"please enter your password"]

    },
    role:{
        type:String,
        enum:['client','provider','admin'],
        default:'client'
    },
    createAt:{
        type:String,
        default:new Date(Date.now())
    }
})
const User = mongoose.model("User",userSchema)
export default User;