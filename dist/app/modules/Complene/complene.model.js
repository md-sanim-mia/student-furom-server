"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compleneModel = void 0;
const mongoose_1 = require("mongoose");
const compleneSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
});
exports.compleneModel = (0, mongoose_1.model)("complenes", compleneSchema);
