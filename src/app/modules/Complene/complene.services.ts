import { TComplene } from "./complene.interface";
import { compleneModel } from "./complene.model";
import { ObjectId } from "mongodb";

const createCompleneIntoDB=async (playload:TComplene)=>{
     const result=await compleneModel.create(playload)
     return result
}

const deleteCompleneFromDB=async (id:string)=>{
    const query={_id:new ObjectId(id)}
    const result =await compleneModel.deleteOne(query)
    return result
}
export const compleneServices={
    createCompleneIntoDB,deleteCompleneFromDB
}