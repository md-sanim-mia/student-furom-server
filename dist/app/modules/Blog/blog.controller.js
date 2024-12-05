"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
const blog_services_1 = require("./blog.services");
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { blog } = req.body;
        const result = yield blog_services_1.blogServices.createBlogIntoDB(blog);
        res.status(200).json({
            success: true,
            message: "blog data created successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield blog_services_1.blogServices.deleteBlogFromDB(id);
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const updateBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { updateDoc } = req.body;
        const result = yield blog_services_1.blogServices.updateBlogFromDB(id, updateDoc);
        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_services_1.blogServices.getAllBlogFromDB();
        res.status(200).json({
            success: true,
            message: "All Blog Getted successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield blog_services_1.blogServices.getSingleBlogFromDB(id);
        res.status(200).json({
            success: true,
            message: "Single Blog Getted successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.blogController = {
    createBlog, deleteBlog, updateBlog,
    getAllBlog, getSingleBlog
};
