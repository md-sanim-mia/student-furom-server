import { Ttution } from "./tution.interface"
import { tutionModel } from "./tution.model"
import { ObjectId } from "mongodb";
const getAllTutionFormDB=async ()=>{
    const result=await tutionModel.find()
    return result
}
const createTutionIntoDB=async (playload:Ttution)=>{
   const result=await tutionModel.create(playload)
   return result
}
const deleteTutionIntoDB=async (id:string)=>{
    const query={_id:new ObjectId(id)}
    const result=await tutionModel.deleteOne(query)
    return result
 }
const getSingleTutionReqFromDB=async (id:string)=>{
    const query={_id:new ObjectId(id)}
    const result=await tutionModel.find(query)
    return result
}
 export const tuionServices={
    getAllTutionFormDB,createTutionIntoDB,
    deleteTutionIntoDB,getSingleTutionReqFromDB
 }
 