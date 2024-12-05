"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.post('/create-blog', blog_controller_1.blogController.createBlog);
router.delete('/delete/:id', blog_controller_1.blogController.deleteBlog);
router.put('/update/:id', blog_controller_1.blogController.updateBlog);
router.get('/getAll', blog_controller_1.blogController.getAllBlog);
router.get('/getSingle/:id', blog_controller_1.blogController.getSingleBlog);
exports.blogRoutes = router;
