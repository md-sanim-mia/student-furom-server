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
const async_catch_1 = require("../../utility/async.catch");
const createBlog = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = req.body;
    const result = yield blog_services_1.blogServices.createBlogIntoDB(blog);
    res.status(200).json({
        success: true,
        message: "blog data created successfully",
        data: result,
    });
}));
const deleteBlog = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield blog_services_1.blogServices.deleteBlogFromDB(id);
    res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
        data: result,
    });
}));
const updateBlog = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateDoc = req.body;
    const result = yield blog_services_1.blogServices.updateBlogFromDB(id, updateDoc);
    res.status(200).json({
        success: true,
        message: "Blog updated successfully",
        data: result,
    });
}));
const getAllBlog = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let search = "";
    if (req.query.q) {
        search = req.query.q.toString();
    }
    const result = yield blog_services_1.blogServices.getAllBlogFromDB(search);
    res.status(200).json({
        success: true,
        message: "All Blog Getted successfully",
        data: result,
    });
}));
const getMyBlog = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const email = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.email;
    const result = yield blog_services_1.blogServices.getMyBlogFromDB(email);
    res.status(200).json({
        success: true,
        message: "My all Blog Getted successfully",
        data: result,
    });
}));
const getSingleBlog = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield blog_services_1.blogServices.getSingleBlogFromDB(id);
    res.status(200).json({
        success: true,
        message: "Single Blog Getted successfully",
        data: result,
    });
}));
exports.blogController = {
    createBlog,
    deleteBlog,
    updateBlog,
    getAllBlog,
    getSingleBlog,
    getMyBlog,
};
