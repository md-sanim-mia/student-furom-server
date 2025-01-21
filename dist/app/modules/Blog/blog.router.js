"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const auth_1 = __importDefault(require("../../middlwares/auth"));
const router = express_1.default.Router();
router.post("/create-blog", (0, auth_1.default)("admin"), blog_controller_1.blogController.createBlog);
router.delete("/delete/:id", (0, auth_1.default)("admin"), blog_controller_1.blogController.deleteBlog);
router.patch("/update/:id", (0, auth_1.default)("admin"), blog_controller_1.blogController.updateBlog);
router.get("/getAll", blog_controller_1.blogController.getAllBlog);
router.get("/getMyBlogs", (0, auth_1.default)("admin"), blog_controller_1.blogController.getMyBlog);
router.get("/getSingle/:id", blog_controller_1.blogController.getSingleBlog);
exports.blogRoutes = router;
