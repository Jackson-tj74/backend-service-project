import jwt from "jsonwebtoken"



export function  generateToken  (id){
    return jwt.sign({id:id},process.env.SECRET_KEY,{expiresIn:"1d"})
}


export function DecodToken (token){
    return jwt.verify(token.trim(),process.env.SECRET_KEY,{expiresIn:"1d"})
}