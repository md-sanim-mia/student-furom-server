import { TAdvertising } from "./Advertising.interface";
import { ObjectId } from "mongodb";
import { AdvertisingModel } from "./Advertising.model";
const updateAdvertisingIntoDB=async (id:string, updateDoc:Partial<TAdvertising>)=>{
    const query={_id:new ObjectId(id)}
    const update ={ $set: updateDoc }
    const option ={new:true}
    const result = await AdvertisingModel.updateOne(query,update,option)
    return result
}

const createAdvertisingIntoDB=async (playload:TAdvertising)=>{
    const result =await AdvertisingModel.create(playload)
    return result
}

const getAllAdvertisingFromDB=async ()=>{
     const result=await AdvertisingModel.find()
     return result
}

const deleteAdvertisingFromDB=async (id:string)=>{
    const query={_id:new ObjectId(id)}
   const result=await AdvertisingModel.deleteOne(query)
   return result
}
export const advertisingServices={
    updateAdvertisingIntoDB, createAdvertisingIntoDB,
    getAllAdvertisingFromDB, deleteAdvertisingFromDB
}