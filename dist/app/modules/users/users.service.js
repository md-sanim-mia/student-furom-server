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
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersServices = void 0;
const users_model_1 = require("./users.model");
const createUserForDb = (playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.create(playood);
    return result;
});
const getAllUsersForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.find({});
    return result;
});
const getSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOne({ _id: userId });
    return result;
});
const updateSingleUsersForDb = (userId, playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOneAndUpdate({ _id: userId }, playood, {
        new: true,
    });
    return result;
});
const deleteSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.deleteOne({ _id: userId });
    return result;
});
const blockSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.deleteOne({ _id: userId }, {
        $set: { status: "block" },
    });
    return result;
});
const activekSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.deleteOne({ _id: userId }, {
        $set: { status: "in-progress" },
    });
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
};
