import { blogServices } from "./blog.services";
import { asyncCatch } from "../../utility/async.catch";

const createBlog = asyncCatch(async (req, res) => {
  const blog = req.body;
  const result = await blogServices.createBlogIntoDB(blog);
  res.status(200).json({
    success: true,
    message: "blog data created successfully",
    data: result,
  });
});

const deleteBlog = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await blogServices.deleteBlogFromDB(id);
  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

const updateBlog = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const updateDoc = req.body;
  const result = await blogServices.updateBlogFromDB(id, updateDoc);
  res.status(200).json({
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const getAllBlog = asyncCatch(async (req, res) => {
  let search = "";
  if (req.query.q) {
    search = req.query.q.toString();
  }
  const result = await blogServices.getAllBlogFromDB(search);
  res.status(200).json({
    success: true,
    message: "All Blog Getted successfully",
    data: result,
  });
});

const getMyBlog = asyncCatch(async (req, res) => {
  const email = req?.query?.email as string;
  const result = await blogServices.getMyBlogFromDB(email);
  res.status(200).json({
    success: true,
    message: "My all Blog Getted successfully",
    data: result,
  });
});

const getSingleBlog = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await blogServices.getSingleBlogFromDB(id);
  res.status(200).json({
    success: true,
    message: "Single Blog Getted successfully",
    data: result,
  });
});
export const blogController = {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllBlog,
  getSingleBlog,
  getMyBlog,
};
