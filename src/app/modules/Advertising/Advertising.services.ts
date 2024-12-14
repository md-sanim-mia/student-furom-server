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

export const advertisingServices={
    updateAdvertisingIntoDB
}