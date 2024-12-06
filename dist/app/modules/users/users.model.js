"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const users_const_1 = require("./users.const");
const bcrypt_1 = __importDefault(require("bcrypt"));
const usersSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
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
}, { timestamps: true });
usersSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const password = this.password;
        if (!password) {
            throw new Error("password is requried");
        }
        const bcryptPassword = yield bcrypt_1.default.hash(this.password, 10);
        if (!password) {
            throw new Error(" bcrypt solt generate problem ");
        }
        this.password = bcryptPassword;
    });
});
exports.Users = (0, mongoose_1.model)("users", usersSchema);
