"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GallaryModel = void 0;
const mongoose_1 = require("mongoose");
const gallarySchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    heading: { type: String, required: true },
});
exports.GallaryModel = (0, mongoose_1.model)("gallary", gallarySchema);
