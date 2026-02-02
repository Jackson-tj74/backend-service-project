import jwt from "jsonwebtoken"
import { DecodToken } from "../utils/jwtUtil.js"
import User from "../models/userModel.js"


export function VerifyAcess(passRoles) {
    return async (req,res,next)=>{

    const token = req.headers['auth-token']
    console.log(token)

    if(!token){
        return res.status(404).json({message:"token not provided"})
    }else{
        // try{
        const decodedToken = DecodToken(token)
        req.user= decodedToken.user
        const user = await User.findById(decodedToken?.id)
        if(!user){
            return res.status(404).json({statuss:404,message:"User not found"})
        }else{
        if(!passRoles.includes(user.role)){
            return res.status(401).json({message:"you dont have an account"})
        }else{
            req.user=user
            next()
        }
    }
        // }catch(error){
        //     if(error.name ="JsonWebTokenError"){
        //         return res.status(401).json({message:"Invalid token or expire"})
        //     }else{
        //         return res.status(500).json({message:`error is ${error}`})
        //     }
        // }
    }
    }
}