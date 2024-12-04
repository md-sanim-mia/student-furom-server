"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const users_const_1 = require("./users.const");
const usersSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    bloodGroup: { type: String, required: true, enum: users_const_1.BloodGroup },
    department: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    session: { type: String, required: true },
    role: { type: String, default: "user", required: false },
    year: { type: String, required: true },
    status: {
        type: String,
        enum: ["in-progress", "block"],
        default: "in-progress",
        required: false,
    },
    designation: { type: String, required: false },
});
exports.Users = (0, mongoose_1.model)("users", usersSchema);
