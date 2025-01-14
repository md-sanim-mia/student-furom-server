import { Tmagazine } from "./magazine.interface"
import { MagazineModel } from "./magazine.model"
import { ObjectId } from "mongodb";
const createMagazineIntoDB=async (playload:Tmagazine)=>{
    const result=await MagazineModel.create(playload)
    return result
}

const getAllMagazineFromDB=async ()=>{
    
    const result=await MagazineModel.find()
    return result
}
const deleteMagazineFromDB=async (id:string)=>{
    const query={_id:new ObjectId(id)}
    const result=await MagazineModel.deleteOne(query)
    return result
}

export const MagazineServices={
    createMagazineIntoDB,getAllMagazineFromDB,deleteMagazineFromDB
}