"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodRequest = void 0;
const mongoose_1 = require("mongoose");
const blood_request_constant_1 = require("./blood.request.constant");
const bloodRequestSchema = new mongoose_1.Schema({
    patientName: { type: String, required: true },
    patientEmail: { type: String },
    patientContactNumber: { type: String, required: true },
    patientAge: { type: String, required: true },
    patientBloodGroup: {
        type: String,
        enum: blood_request_constant_1.BloodGroup,
        required: true,
    },
    bagsNeeded: { type: String, required: true },
    neededByDeadline: { type: String, required: true },
    hospitalAddress: { type: String, required: true },
    hospitalName: { type: String, required: false },
    gender: {
        type: String,
        enum: blood_request_constant_1.Genders,
        required: true,
    },
    status: {
        type: String,
        enum: blood_request_constant_1.Status,
        required: false,
        default: "pending",
    },
}, { timestamps: true });
bloodRequestSchema.index({ createdAt: 1 }, { expireAfterSeconds: 12 * 24 * 60 * 60 });
exports.BloodRequest = (0, mongoose_1.model)("BloodRequest", bloodRequestSchema);
