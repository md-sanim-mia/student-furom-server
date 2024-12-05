import { model, Schema } from "mongoose";
import { Tblog } from "./blog.interface";

const blogSchema=new Schema<Tblog>({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    title:{type:String,required:true},
    image_url:{type:String,default:"https://i.ibb.co.com/CQxZVXP/profile-user.png"},
    content:{type:String,required:true},
    blog_image:{type:String,required:true}
})

export const blogModel=model<Tblog>("Blog",blogSchema)