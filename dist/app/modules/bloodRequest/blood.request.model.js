"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodRequest = void 0;
const mongoose_1 = require("mongoose");
const blood_request_constant_1 = require("./blood.request.constant");
const bloodRequestSchema = new mongoose_1.Schema({
    donorName: { type: String, required: true },
    donorEmail: { type: String, required: true },
    donorBloodGroup: {
        type: String,
        required: true,
    },
    donorContactNumber: { type: String, required: true },
    donorGender: {
        type: String,
        required: true,
    },
    donorAge: { type: Number, required: true },
    patientName: { type: String, required: true },
    patientEmail: { type: String },
    patientContactNumber: { type: String, required: true },
    patientAge: { type: Number, required: true },
    patientBloodGroup: {
        type: String,
        enum: blood_request_constant_1.BloodGroup,
        required: true,
    },
    bagsNeeded: { type: Number, required: true },
    neededByDeadline: { type: Date, required: true },
    hospitalAddress: { type: String, required: true },
    hospitalName: { type: String, required: true },
    requesterGender: {
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
});
exports.BloodRequest = (0, mongoose_1.model)("BloodRequest", bloodRequestSchema);
