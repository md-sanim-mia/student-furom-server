import { TpreviousCommitte } from "./previousCommitte.interface";
import { PreviousModel } from "./previousCommitte.model";
import { ObjectId } from "mongodb";

const createPreviousIntoDB=async (playload:TpreviousCommitte)=>{
   const result=await PreviousModel.create(playload)
   return result
}

const getAllPreviousFromDB=async ()=>{
    const result=await PreviousModel.find()
    return result
}
const deletePriviousFromDB=async (id:string)=>{
    const query={_id:new ObjectId(id)}
    const result=await PreviousModel.deleteOne(query)
    return result
}

export const previousServices={
    createPreviousIntoDB,deletePriviousFromDB,
    getAllPreviousFromDB
}