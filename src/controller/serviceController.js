
import Category from "../models/categoryModel.js"
import Service from "../models/serviceModel.js"


class ServiceController{
    static createService = async(req,res)=>{
     const {title,description,categoryId,price}=req.body
     try{

     const category=await Category.findById(categoryId)
     if(!category){
        return res.status(404).json({massege:"Category not found"})
     }else{
        const userId=req.user?._id
        if(!userId){
            return res.status(404).json({message:"Login please"})
        }
         let  service = await Service.create({
            title,
            description,
            categoryId,
            price,
            providerId:userId

        })
         service = await service.populate([
            {path:"categoryId",select:"categoryName"},
            {path:"providerId",select:"names email"},
        ])
        return res.status(200).json({message:"service created succefully",service})
     }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    }
     static getAllServices = async (req, res) => {
        const services = await Service.find()
        if (!services) {
            return res.status(404).json({ message: "Services not found" })
        } else {
            return res.status(200).json({ message: "Services founded successfully" ,services})
        }
    }
    static deleteOneService = async (req, res) => {
        try {
            const id = req.params.id
            const service = await Service.findByIdAndDelete(id)
            if (!service) {
                return res.status(404).json({ message: "Service not found" })
            } else {
                return res.status(200).json({ message: "Service deleted successfully" ,service})
            }

        } catch (error) {
            return res.status(500).json({message:"Sevice not deleted"})

        }
    }
    static deleteAllServices = async (req, res) => {
        const services = await Service.deleteMany(req.body)
        if (!services) {
            return res.status(404).json({ message: "Services not found" })

        } else {
            return res.status(200).json({ message: "Services delete successfully",services })
        }

    }
    static UpdateServices =async (req,res)=>{
        const id = req.params.id
        const update = await Service.findByIdAndUpdate(id,req.body,{new:true})
        
        if(!update){
          return  res.status(404).json({message:"Service not found"})

        }else{
            return res.status(200).json({ message: "Service updated successfully" ,update});

        }
        
    }
    static getOneService =async(req,res)=>{
        try{
        const id = req.params.id
        const service = await Category.findById(id)
        if(!service){
          return res.status(404).json({message:"service are not found"})
        }else{
          return res.status(200).json({message:"service founded successfully",service})
        }
      }catch(error){
        return res.status(500).json({message:"service are not deleted"})
      }
    }

    }
export default ServiceController