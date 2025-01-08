import { model, Schema } from "mongoose";
import { TGallary } from "./gallary.interface";


const gallarySchema=new Schema<TGallary>({
    image:{type:String,required:true},
    title:{type:String,required:true},
    heading:{type:String,required:true}
})

export const GallaryModel=model<TGallary>('gallary',gallarySchema)