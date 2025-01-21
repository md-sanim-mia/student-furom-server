"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogModel = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    email: { type: String, required: true },
    author: { type: String, required: true },
    authorImg: { type: String, required: true },
    contentImg: { type: String, required: true },
    date: { type: Date, require: true, default: new Date() },
}, {
    timestamps: true,
});
exports.blogModel = (0, mongoose_1.model)("Blog", blogSchema);
