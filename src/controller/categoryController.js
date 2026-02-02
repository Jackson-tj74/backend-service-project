import Category from "../models/categoryModel.js"

class CategoryController {

    static createCategory = async(req,res)=>{
        const category = await Category.create(req.body)
        if(!category){
            return res.status(404).json({message:'category not created'})
        }else{
            return res.status(200).json({message:"Category created successfully",category})
        }
    }
   static getAllCategories = async(req,res)=>{
    const categories = await Category.find(req.body)
    if(!categories){
        return res.status(404).json({message:"Categories are not found "})
    }else{
        return res.status(200).json({message:"Categories founded successfully",categories})
    }
   }
   static getOneCategory =async(req,res)=>{
    const id = req.params.id
    const category = await Category.findById(id)
    if(!category){
        return res.status(404).json({message:"category are not found"})
    }else{
        return res.status(200).json({message:"founded successfully",category})
    }
   }
   static deleteAllCategories =async (req,res)=>{
    const categories = await Category.find()
    if(!categories){
        return res.status(404).json({message:"Categories not found"})
    }else{
        return res.status(200).json({message:"Categories deleted successfully"})
    }
   }
   static deleteOneCategory = async (req,res)=>{
    const id = req.params.id
    const category = await Category.findByIdAndDelete(id)
    if(!category){
        return res.status(404).json({message:"Category not fount"})
    }else{
        return res.status(200).json({message:"Category deleted successfully",Category})
    }
   }
   static updateCategory =async (req,res)=>{
    const id = req.params.id
    const update = await Category.findByIdAndUpdate(id)
    if(!update){
        return res.status(404).json({message:"Categoty are not found"})
    }else{
        return res.status(200).json({message:"Category updated successfully",update})
    }

   }

}
export default CategoryController