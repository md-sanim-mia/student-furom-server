import { NextFunction, Request, RequestHandler, Response } from "express";
import { blogServices } from "./blog.services";

const createBlog:RequestHandler = async (req, res, next) => {
    try {
        const { blog } = req.body;
        const result = await blogServices.createBlogIntoDB(blog)
        res.status(200).json({
            success: true,
            message: "blog data created successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

const deleteBlog:RequestHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await blogServices.deleteBlogFromDB(id)
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

const updateBlog:RequestHandler =async (req,res,next)=>{
     try{
        const id=req.params.id
        const {updateDoc}=req.body
        const result=await blogServices.updateBlogFromDB(id,updateDoc)
        res.status(200).json({
           success: true,
           message: "Blog updated successfully",
           data: result
       })
     }
     catch(err){
        next(err)
     }

}
const getAllBlog:RequestHandler =async (req,res,next)=>{
    try{
        const result=await blogServices.getAllBlogFromDB()
        res.status(200).json({
            success: true,
            message: "All Blog Getted successfully",
            data: result
        })
    }
    catch(err){
        next(err)
    }
}

const getSingleBlog:RequestHandler =async (req,res,next)=>{
    try{
        const id=req.params.id
        const result=await blogServices.getSingleBlogFromDB(id)
        res.status(200).json({
            success: true,
            message: "Single Blog Getted successfully",
            data: result
        })
    }
    catch(err){
        next(err)
    }
}
export const blogController = {
    createBlog,deleteBlog,updateBlog,
    getAllBlog,getSingleBlog
}