
import mongoose  from "mongoose";
import Category from "./categoryModel.js";
import User from "./userModel.js";


const serviceSchema= mongoose.Schema({
    title:{
        type:String,
        required:[true,"please title required"]
    },
    description:{
        type:String,
        required:[true,"please description is required"]
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"

    },
    price:{
        type:Number,
        required:[true,"please price required"]
    },
    providerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
serviceSchema.pre(/^find/,function(){
    this.populate(
        {path:"categoryId",select:"categoryName"}
    ).populate(
    {path:"providerId",select:"names email"}
    )
})
const Service = mongoose.model("Service",serviceSchema)
export default Service