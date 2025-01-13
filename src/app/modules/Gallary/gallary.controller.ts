import { asyncCatch } from "../../utility/async.catch"
import { GallaryServices } from "./gallary.services"

const createGallary=asyncCatch(async (req,res)=>{
    const gallaryData=req.body
    const result=await GallaryServices.createGallaryIntoDB(gallaryData)
    res.status(200).json({
        success:true,
        message:"Gallary created succesfully",
        data:result
    })
})

const getAllGallary=asyncCatch(async (req,res)=>{
   
      const result=await GallaryServices.getAllGallaryFromDB()
      res.status(200).json({
        success:true,
        message:"All gallary geted succesfully",
        data:result
    })
})

const deleteGallary=asyncCatch(async (req,res)=>{
    const id=req.params.id
    const result=await GallaryServices.deleteGallaryFromDB(id)
    res.status(200).json({
        success:true,
        message:"Gallary deleted successfully",
        data:result
    })
})

export const gallaryControllers={
    createGallary,getAllGallary,deleteGallary
}