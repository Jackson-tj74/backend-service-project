import mongoose from "mongoose";


const categorySchema = mongoose.Schema({

    categoryName:{
        type:String,
        required:[true," Category name is required"]
    },
    createAt:{
        type:Date,
        default:new Date(Date.now())
    }
})
const Category = mongoose.model("Category",categorySchema)
export default Category