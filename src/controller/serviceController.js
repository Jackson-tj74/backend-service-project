import Category from "../models/categoryModel"

class serviceController{
    static createService = async(req,res)=>{
        try{
        const{title,description,categorys,price}=req.body
        
        const category= await Category.findById(categorys)
        if(!category){
            return res.status(404).json({message:"Category not found"})

        }
        const userId = userId.user?.id
        if(!userId){
            return res.status(404).json({message:"user not fount"})
        }
        }catch(error){
        return res.status(500).json({message:"create booking failed"})
    }
    }
    
}