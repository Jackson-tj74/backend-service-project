import dotenv from "dotenv"
import nodemailer from "nodemailer"


export const transporter = nodemailer.createTransport({
    service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }

});
export const sendMail =async(mailOptions)=>{
    try{
       return await transporter.sendMail({
          from:`community service <${process.env.NODEMAILER_EMAIL}>`,
          ...mailOptions
        })
    
}catch(error){
        console.log(error.message)
    }
}