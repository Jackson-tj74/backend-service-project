
import mongoose  from "mongoose";
import Category from "./categoryModel";


const serviceSchema= mongoose.Schema({
    title:{
        type:String,
        required:[true,"please title required"]
    },
    description:{
        type:String,
        required:[true,"please description is required"]
    },
    categorys:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"

    },
    price:{
        type:Number,
        required:[true,"please price required"]
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
serviceSchema.pre(/^find/,function(){
    this.populate(
        {path:"categorys",select:"categoryName"}
    ).populate(
    {path:"provider",select:"names email"}
    )
})
const Service = mongoose.model("Service",serviceSchema)
export default Service