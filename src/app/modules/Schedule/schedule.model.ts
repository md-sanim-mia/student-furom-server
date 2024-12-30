import { model, Schema } from "mongoose";
import { TSchedule } from "./schedule.interface";

const scheduleSchema=new Schema<TSchedule>({
    heading:{type:String,required:true},
    event_name:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    note:{type:String,required:false}
})

export const scheduleModel=model<TSchedule>('schedule',scheduleSchema)