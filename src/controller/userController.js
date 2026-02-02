
import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwtUtil.js"

class Controller{

    static signup =async(req,res)=>{
        const{names,email,password,role}= req.body
        const hashPassword = bcrypt.hashSync(password,10)


        try{
            const user = await User.create({names,email,password:hashPassword,role})
        if(!user){
            return  res.status(404).json({message:"user creation failed"})

        }else{
            return res.status(201).json({message:"user creation successfully",user})
        }
        }
     catch(error){
        console.log(error)

        return res.status(500).json({message:`create failed ${error}`})

}

    }
    
    static login = async(req,res)=>{
        const {email,password} = req.body
        const user = await User.findOne({email})
            if(!user){
            return res.status(404).json({message:"User not found"}) 
        }else{
            const comparePassword = bcrypt.compareSync(password,user.password)
            if(!comparePassword){
                return res.status(403).json({message:"Invalid password"})
            }else{
               
                const token = generateToken(user?.id)
                return res.status(201).json({message:"User login successfully",token})
            }
        }
    }

    
    static getAllUsers =async (req,res)=>{
        const users = await User.find()
        if(!users){
            return res.status(404).json({message:"users not found"})

        }else{
            return res.status(200).json({message:"users founded successfully",users})
        }

    }

    static deleteOneUser = async(req,res)=>{
        const {id} = req.params.id
        const user = await User.findByIdAndDelete()
        if(!user){
            return res.status(404).json({message:"user not found"})
        }else{
            return res.status(200).json({message:"user deleted successfully"})
        }
    }
    static deleteAllUsers = async(req,res)=>{
        const users = await User.find()
        if(!users){
            return res.status.json({message:'users are not found'})
        }else{
            return res.status(200).json({message:'users deleted successfully'})

        }
    }

    static updateUser =async(req,res)=>{
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id,req.body,{new:true})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }else{
            return res.status(200).json({message:"user deleted successfully",user})
        }

    }


}
export default Controller