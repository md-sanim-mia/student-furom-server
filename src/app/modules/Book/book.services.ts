
import { TBook } from "./book.interface";
import { BookModel } from "./book.model";
import { ObjectId } from "mongodb";
const createBookIntoDB=async (playload:TBook)=>{
     const result=await BookModel.create(playload)
     return result
}
const getAllBookFromDB=async ()=>{
    const result=await BookModel.find()
    return result
}
const deleteBookFromDB=async (id:string)=>{
    const query={_id:new ObjectId(id)}
    const result=await BookModel.deleteOne(query)
    return result
}

const updateBookFromDB = async (id: string,updateDoc:Partial<TBook>) => {
    const query = { _id: new ObjectId(id) }
    const update = { $set: updateDoc }
    const option ={new:true}
    const result = await BookModel.updateOne(query,update,option)
    return result
}

export const bookServices={
    createBookIntoDB,getAllBookFromDB,
    deleteBookFromDB,updateBookFromDB
}