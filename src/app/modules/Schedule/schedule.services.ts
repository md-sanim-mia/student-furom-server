import { TSchedule } from "./schedule.interface";
import { scheduleModel } from "./schedule.model";
import { ObjectId } from "mongodb";
const createScheduleIntoDB=async (playload:TSchedule)=>{
   const result=await scheduleModel.create(playload)
   return result
}

const deleteScheduleIntoDB=async (id:string)=>{
   const query={_id:new ObjectId(id)}
   const result=await scheduleModel.deleteOne(query)
   return result
}

const updateScheduleFromDB = async (id: string,updateDoc:Partial<TSchedule>) => {
    const query = { _id: new ObjectId(id) }
    const update = { $set: updateDoc }
    const option ={new:true}
    const result = await scheduleModel.updateOne(query,update,option)
    return result
}
export const scheduleServices={
    createScheduleIntoDB,deleteScheduleIntoDB,updateScheduleFromDB
}