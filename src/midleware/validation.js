
import { error } from "console"
import User from "../models/userModel.js"
import Category from "../models/categoryModel.js"

export const EmailExist = async(req,res,next)=>{
    const email=req.body
    const user = await User.findOne(email)
    if(user){
        return res.status(403).json({message:"user already exist "})
    }else{
        next()
    }

}
export const CategoryExist = async(req,res,next)=>{
    const categoryName=req.body
    const category= await Category.findOne(categoryName)

    if(category){
        return res.status(403).json({message:"Category already exist"})
    }else{
        next()
    }

}