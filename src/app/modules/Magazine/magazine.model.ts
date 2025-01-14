import { model, Schema } from "mongoose";
import { Tmagazine } from "./magazine.interface";

const MagazineSchema=new Schema<Tmagazine>({
    image:{type:String,required:true},
    name:{type:String,required:true},
    link:{type:String,required:true},
    description:{type:String,required:true},
    written_by:{type:String,required:true},
})

export const MagazineModel=model<Tmagazine>('magazine',MagazineSchema)