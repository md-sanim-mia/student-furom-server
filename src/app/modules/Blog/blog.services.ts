import { Tblog } from "./blog.interface"
import { blogModel } from "./blog.model"
import { ObjectId } from "mongodb";
const createBlogIntoDB = async (playload: Tblog) => {
    const result = await blogModel.create(playload)
    return result
}

const deleteBlogFromDB = async (id: string) => {
    const query = { _id: new ObjectId(id) }
    const result = await blogModel.deleteOne(query)
    return result
}

const updateBlogFromDB = async (id: string,updateDoc:Partial<Tblog>) => {
    const query = { _id: new ObjectId(id) }
    const update = { $set: updateDoc }
    const option ={new:true}
    const result = await blogModel.updateOne(query,update,option)
    return result
}

const getSingleBlogFromDB=async (id:string)=>{
     const query={_id:new ObjectId(id)}
     const result=await blogModel.find(query)
     return result
}
const getAllBlogFromDB=async (search:string)=>{
    const query= search? {
        $or: [
            { title: { $regex: search, $options: "i" } }, 
        ],
    }
  : {};
     const result=await blogModel.find(query)
     return result
}
export const blogServices = {
    createBlogIntoDB, deleteBlogFromDB,
    updateBlogFromDB,getSingleBlogFromDB,
    getAllBlogFromDB
}