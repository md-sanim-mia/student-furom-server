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
exports.usersContllors = void 0;
const async_catch_1 = require("../../utility/async.catch");
const users_service_1 = require("./users.service");
const createUsers = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playood = req.body;
    const result = yield users_service_1.usersServices.createUserForDb(playood);
    res.status(200).json({
        success: true,
        message: "user success fully created",
        data: result,
    });
}));
const getAllUsers = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_service_1.usersServices.getAllUsersForDb();
    res.status(200).json({
        success: true,
        message: "get all users for db",
        data: result,
    });
}));
const getSingleUser = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield users_service_1.usersServices.getSingleUsersForDb(userId);
    res.status(200).json({
        success: true,
        message: "get single user for db",
        data: result,
    });
}));
const updateSingleUser = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const playood = req.body;
    const result = yield users_service_1.usersServices.updateSingleUsersForDb(userId, playood);
    res.status(200).json({
        success: true,
        message: "update single user for db",
        data: result,
    });
}));
const deleteSingleUser = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield users_service_1.usersServices.deleteSingleUsersForDb(userId);
    res.status(200).json({
        success: true,
        message: "delete single user for db",
        data: result,
    });
}));
const blockSingleUser = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield users_service_1.usersServices.blockSingleUsersForDb(userId);
    res.status(200).json({
        success: true,
        message: "block single user for db",
        data: result,
    });
}));
const activeSingleUser = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield users_service_1.usersServices.activekSingleUsersForDb(userId);
    res.status(200).json({
        success: true,
        message: "active single user for db",
        data: result,
    });
}));
exports.usersContllors = {
    createUsers,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    blockSingleUser,
    activeSingleUser,
};
