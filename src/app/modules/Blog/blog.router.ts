import express from "express";
import { blogController } from "./blog.controller";
import auth from "../../middlwares/auth";

const router = express.Router();

router.post("/create-blog", auth("admin"), blogController.createBlog);
router.delete("/delete/:id", auth("admin"), blogController.deleteBlog);
router.patch("/update/:id", auth("admin"), blogController.updateBlog);
router.get("/getAll", blogController.getAllBlog);
router.get("/getMyBlogs", auth("admin"), blogController.getMyBlog);
router.get("/getSingle/:id", auth("admin"), blogController.getSingleBlog);

export const blogRoutes = router;
