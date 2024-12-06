import { RequestHandler } from "express";
import { bookServices } from "./book.services";

const createBook:RequestHandler=async (req,res,next)=>{
     try{
        const bookData=req.body
        const result=await bookServices.createBookIntoDB(bookData)
        res.status(200).json({
            success:true,
            message:"Book created successfully",
            data:result
        })
     }
     catch(err){
        next(err)
     }
}

const getAllBook:RequestHandler=async (req,res,next)=>{
    try{
       
       const result=await bookServices.getAllBookFromDB()
       res.status(200).json({
           success:true,
           message:"Get All Book successfully",
           data:result
       })
    }
    catch(err){
       next(err)
    }
}

const deleteBook:RequestHandler=async (req,res,next)=>{
    try{
       const id=req.params.id
       const result=await bookServices.deleteBookFromDB(id)
       res.status(200).json({
           success:true,
           message:"Delete Book successfully",
           data:result
       })
    }
    catch(err){
       next(err)
    }
}

const updateBook:RequestHandler =async (req,res,next)=>{
    try{
       const id=req.params.id
       const {updateDoc}=req.body
       const result=await bookServices.updateBookFromDB(id,updateDoc)
       res.status(200).json({
          success: true,
          message: "Book updated successfully",
          data: result
      })
    }
    catch(err){
       next(err)
    }

}
export const bookContrller={
    createBook,getAllBook,deleteBook,updateBook
}