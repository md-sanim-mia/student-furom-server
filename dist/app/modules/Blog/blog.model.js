"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogModel = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    image_url: { type: String, default: "https://i.ibb.co.com/CQxZVXP/profile-user.png" },
    content: { type: String, required: true },
    blog_image: { type: String, required: true }
}, {
    timestamps: true
});
exports.blogModel = (0, mongoose_1.model)("Blog", blogSchema);
