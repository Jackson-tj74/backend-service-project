
import { error } from "console"
import User from "../models/userModel.js"
import Category from "../models/categoryModel.js"
import Service from "../models/serviceModel.js"

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
export const ServiceExist =async(req,res,next)=>{
    const title =req.body
    const service = await Service.findOne(title)
    if(service){
        return res.status(403).json({message:"Sevice already exist"})
    }else{
        next()
    }
}
export const ExistBookingService = async(req,res,next)=>{
    const {serviceId}= req.body
    try{
        const service =await Service.findById(serviceId)
        if(service){
            return res.status(404).json({message:"Service already exist"})
        }else{
            next()
        }
    }catch(error){
        return res.status(500).json({message:`error is ${error}`})
    }
}