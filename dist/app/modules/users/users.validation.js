"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersValidation = void 0;
const zod_1 = require("zod");
const users_const_1 = require("./users.const");
const usersValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty("Name is required"),
        email: zod_1.z.string().email("Invalid email").nonempty("Email is required"),
        password: zod_1.z
            .string()
            .min(6, "password must be 6 character")
            .nonempty("password is required"),
        phoneNumber: zod_1.z.string().nonempty("Phone number is required"),
        bloodGroup: zod_1.z.enum([...users_const_1.BloodGroup]),
        department: zod_1.z.string().nonempty("Department is required"),
        image: zod_1.z.string().nonempty("Image is required"),
        address: zod_1.z.string().nonempty("Address is required"),
        session: zod_1.z.string().nonempty("Session is required"),
        role: zod_1.z.string().default("user").optional(),
        year: zod_1.z.string().nonempty("Year is required"),
        status: zod_1.z.enum(["in-progress", "block"]).default("in-progress").optional(),
    }),
});
const usersUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email("Invalid email").optional(),
        phoneNumber: zod_1.z.string().optional(),
        bloodGroup: zod_1.z.enum([...users_const_1.BloodGroup]).optional(),
        department: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        session: zod_1.z.string().optional(),
        year: zod_1.z.string().optional(),
    }),
});
const LogingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string({ required_error: "password is required" }),
    }),
});
exports.usersValidation = {
    usersValidationSchema,
    usersUpdateValidationSchema,
    LogingValidationSchema,
};
