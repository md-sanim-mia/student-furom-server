"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    book_name: { type: String, required: true },
    book_title: { type: String, required: true },
    writer_name: { type: String, required: true },
    drive_link: { type: String, required: true }
});
exports.BookModel = (0, mongoose_1.model)('Book', bookSchema);
