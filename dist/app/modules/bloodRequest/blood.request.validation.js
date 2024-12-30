"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const blood_request_constant_1 = require("./blood.request.constant");
const bloodRequestValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        donorName: zod_1.z.string().min(1, "Donor name is required"),
        donorEmail: zod_1.z
            .string()
            .email("Invalid email address")
            .min(1, "Donor email is required"),
        donorBloodGroup: zod_1.z.string().min(1, "Donor blood group is required"),
        donorContactNumber: zod_1.z.string().min(1, "Donor contact number is required"),
        donorGender: zod_1.z.enum(["Male", "Female", "Other"]),
        donorAge: zod_1.z.number().int().min(0, "Donor age must be a positive number"),
        patientName: zod_1.z.string().min(1, "Patient name is required"),
        patientEmail: zod_1.z.string().email("Invalid email address").optional(),
        patientContactNumber: zod_1.z
            .string()
            .min(1, "Patient contact number is required"),
        patientAge: zod_1.z
            .number()
            .int()
            .min(0, "Patient age must be a positive number"),
        patientBloodGroup: zod_1.z.enum([...blood_request_constant_1.BloodGroup]),
        bagsNeeded: zod_1.z.number().int().min(1, "At least one bag is required"),
        neededByDeadline: zod_1.z.date().refine((date) => !isNaN(date.getTime()), {
            message: "Invalid deadline date",
        }),
        hospitalAddress: zod_1.z.string().min(1, "Hospital address is required"),
        hospitalName: zod_1.z.string().min(1, "Hospital name is required"),
        requesterGender: zod_1.z.enum([...blood_request_constant_1.Genders]),
        status: zod_1.z
            .enum([...blood_request_constant_1.Status])
            .optional()
            .default("pending"),
    }),
});
exports.default = bloodRequestValidationSchema;
