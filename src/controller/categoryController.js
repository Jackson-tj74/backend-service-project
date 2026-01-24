import Category from "../models/categoryModel.js"

class CategoryController {

    static createCategory = async(req,res)=>{
        const category = await Category.create(req.body)
        if(!category){
            return res.status(404).json({message:'category not created'})
        }else{
            return res.status(200).json({message:"Category created successfully"})
        }
    }


}
export default CategoryController