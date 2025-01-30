"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutionModel = void 0;
const mongoose_1 = require("mongoose");
const tutionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    contact_number: { type: String, required: true },
    location: { type: String, required: true },
    student_gender: { type: String, required: true },
    teacher_need: { type: String, required: true },
    salary: { type: Number, required: true },
    class: { type: String, required: true },
}, {
    timestamps: true,
});
exports.tutionModel = (0, mongoose_1.model)("tutionRequest", tutionSchema);
