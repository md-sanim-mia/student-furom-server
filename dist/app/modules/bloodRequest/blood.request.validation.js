"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const blood_request_constant_1 = require("./blood.request.constant");
const bloodRequestValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        patientName: zod_1.z.string().min(1, "Patient name is required"),
        patientEmail: zod_1.z.string().email("Invalid email address").optional(),
        patientContactNumber: zod_1.z
            .string()
            .min(1, "Patient contact number is required"),
        patientAge: zod_1.z.string(),
        patientBloodGroup: zod_1.z.enum([...blood_request_constant_1.BloodGroup]),
        bagsNeeded: zod_1.z.string(),
        neededByDeadline: zod_1.z.string(),
        hospitalAddress: zod_1.z.string().min(1, "Hospital address is required"),
        hospitalName: zod_1.z.string().min(1, "Hospital name is required").optional(),
        gender: zod_1.z.enum([...blood_request_constant_1.Genders]),
        status: zod_1.z
            .enum([...blood_request_constant_1.Status])
            .optional()
            .default("pending"),
    }),
});
exports.default = bloodRequestValidationSchema;
