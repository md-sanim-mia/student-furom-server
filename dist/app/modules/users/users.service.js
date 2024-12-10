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
exports.usersServices = void 0;
const users_model_1 = require("./users.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserForDb = (playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.create(playood);
    return result;
});
const getAllUsersForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.find({}).select("-password");
    return result;
});
const getSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOne({ _id: userId }).select("-password");
    return result;
});
const updateSingleUsersForDb = (userId, playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOneAndUpdate({ _id: userId }, playood, {
        new: true,
    }).select("-password");
    return result;
});
const deleteSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.deleteOne({ _id: userId });
    return result;
});
const blockSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.updateOne({ _id: userId }, {
        $set: { status: "block" },
    }).select("-password");
    return result;
});
const activekSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.updateOne({ _id: userId }, {
        $set: { status: "in-progress" },
    }).select("-password");
    return result;
});
const addDesignationSingleUsersForDb = (userId, playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.updateOne({ _id: userId }, {
        $set: { designation: playood },
    });
    return result;
});
const logingUsersForDb = (playood) => __awaiter(void 0, void 0, void 0, function* () {
    if (!playood.email || !playood.password) {
        throw new Error("Email and password are required!");
    }
    const user = yield users_model_1.Users.findOne({ email: playood.email });
    if (!user) {
        throw new Error("Invalid email or password Please try again!");
    }
    const comperPassword = bcrypt_1.default.compare(playood.password, user.password);
    if (!comperPassword) {
        throw new Error("Invalid email or password Please try again!");
    }
    const result = yield users_model_1.Users.findOne({ email: playood.email }).select("-password");
    return result;
});
const updateUserRoleForDb = (userId, playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.updateOne({ _id: userId }, {
        $set: { role: playood },
    }).select("-password");
    if (!result) {
        throw new Error("dose not update user role");
    }
    return result;
});
exports.usersServices = {
    createUserForDb,
    getAllUsersForDb,
    getSingleUsersForDb,
    updateSingleUsersForDb,
    deleteSingleUsersForDb,
    blockSingleUsersForDb,
    activekSingleUsersForDb,
    addDesignationSingleUsersForDb,
    logingUsersForDb,
    updateUserRoleForDb,
};
