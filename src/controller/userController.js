


import bcrypt from "bcryptjs"
import User from "../models/userModel.js"
import { generateToken } from "../utils/jwtUtil.js"


class Controller {

    static signUp = async (req, res) => {

        const { names, email, password } = req.body
        const hashPassword = bcrypt.hashSync(req.body.password, 10)
        try {
            const user = await User.create({ names, email, password: hashPassword })

            if (user) {
                return res.status(200).json({ status: 200, message: "User created sucessfully", user })

            } else {
                return res.status(404).json({ status: 404, message: "User not created" })
            }
        } catch (error) {
            return res.status(500).json({ status: 500, message: error.message })
        }
    }

    static  login = async(req,res)=>{
     
        const{email,password,role}=req.body
        const user = await User.findOne({email})

        if(!user){
           return res.status(403).json({status:403,message:"Invalid email or password"})
        } 
        else{

        const comparePasword = bcrypt.compareSync(password,user.password)
         if(!comparePasword){
            return res.status(404).json({status:403,message:"Invalid email or password"})
            
         } 
         
         else{
               const token = generateToken(user?.id) 
            return res.status(200).json({message:"User login successfully",token})
         }
        }

  }

  static findAllUsers = async(req,res)=>{
    const users = await User.find(req.body)
    if(!users){
        return res.status(404).json({message:"Users are not found"})
    }else{
        return res.status(200).json({message:"Users founded successfully",users})
    }
  }
   
  static deleteOneUser = async(req,res)=>{
    const {id} = req.params
    const user = await User.findByIdAndDelete(id)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }else{
        return res.status(200).json({message:"User deleted successfully"})
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