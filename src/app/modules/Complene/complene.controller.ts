import { asyncCatch } from "../../utility/async.catch";
import { compleneServices } from "./complene.services";

const createComplene=asyncCatch(async (req,res)=>{
    const compleneData=req.body
    const result=await compleneServices.createCompleneIntoDB(compleneData)
    res.status(200).json({
        success:true,
        message:"Complene Created Successfully",
        data:result
    })
})

const deleteComplene=asyncCatch(async (req,res)=>{
    const id=req.params.id
    const result=await compleneServices.deleteCompleneFromDB(id)
    res.status(200).json({
        success:true,
        message:"Complene deleted successfully",
        data:result
    })
})
export const compleneContrller={
    createComplene,deleteComplene
}