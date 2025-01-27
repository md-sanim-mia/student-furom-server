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
exports.blogServices = void 0;
const blog_model_1 = require("./blog.model");
const mongodb_1 = require("mongodb");
const createBlogIntoDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.blogModel.create(playload);
    return result;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield blog_model_1.blogModel.deleteOne(query);
    return result;
});
const updateBlogFromDB = (id, updateDoc) => __awaiter(void 0, void 0, void 0, function* () {
    const option = { new: true };
    const result = yield blog_model_1.blogModel.findByIdAndUpdate(id, updateDoc, option);
    return result;
});
const getSingleBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.blogModel.findById(id);
    return result;
});
const getAllBlogFromDB = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const query = search
        ? {
            $or: [{ title: { $regex: search, $options: "i" } }],
        }
        : {};
    const result = yield blog_model_1.blogModel.find(query);
    return result;
});
const getMyBlogFromDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.blogModel.find({ email: playload });
    return result;
});
exports.blogServices = {
    createBlogIntoDB,
    deleteBlogFromDB,
    updateBlogFromDB,
    getSingleBlogFromDB,
    getAllBlogFromDB,
    getMyBlogFromDB,
};
