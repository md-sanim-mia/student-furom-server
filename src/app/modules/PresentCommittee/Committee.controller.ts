import {asyncCatch} from "../../utility/async.catch"
import { CommitteeServices } from "./Committee.services"

const getAllCommittee=asyncCatch(async (req,res)=>{
      
      const result=await CommitteeServices.getAllCommitteeFromDB()
      res.status(200).json({
        success:true,
        message:"All committee geted succesfully",
        data:result
    })
})
const createCommittee=asyncCatch(async (req,res)=>{
    const committeeData=req.body
    console.log("abc ",committeeData)
    const result=await CommitteeServices.createCommitteeIntoDB(committeeData)
    res.status(200).json({
        success:true,
        message:"Committee created succesfully",
        data:result
    })
})

const deleteCommittee=asyncCatch(async (req,res)=>{
    const id=req.params.id
    const result=await CommitteeServices.deletePCommitteesFromDB(id)
    res.status(200).json({
        success:true,
        message:"Committee deleted successfully",
        data:result
    })
})

const updateCommittee =asyncCatch(async (req,res)=>{
    
    const id=req.params.id
    const updateDoc=req.body
    const result=await CommitteeServices.updateCommitteeFromDB(id,updateDoc)
    res.status(200).json({
       success: true,
       message: "Committee updated successfully",
       data: result
   })
})

export const CommitteController={
    createCommittee,deleteCommittee,
    getAllCommittee,updateCommittee
}