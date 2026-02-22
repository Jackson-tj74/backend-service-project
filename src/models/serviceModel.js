import mongoose from "mongoose";
import Category from "./categoryModel.js";
import User from "./userModel.js";




const ServiceSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,'Please service title is required']
    },
    description:{
        type:String,
        required:[true,'Please service description is required']
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        ref:"Category"
    },
    price:{
            type:Number,
            required:[true,'Service price is required'],
        
    },
    providerId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    createAt:{
        type:Date,
        default: new Date(Date.now())
    },
    
})
 ServiceSchema.pre(/^find/,function(){
    this.populate(
        {path:"categoryId",select:"categoryName"}
    ).populate(
        {path:"providerId",select:"names email"}
    );
 });

 const Service = mongoose.model("Service",ServiceSchema)
 export default Service;