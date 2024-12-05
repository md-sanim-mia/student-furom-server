import express from "express";
import { blogController } from "./blog.controller";

const router=express.Router()

router.post('/create-blog',blogController.createBlog)
router.delete('/delete/:id',blogController.deleteBlog)
router.put('/update/:id',blogController.updateBlog)
router.get('/getAll',blogController.getAllBlog)
router.get('/getSingle/:id',blogController.getSingleBlog)

export const blogRoutes=router