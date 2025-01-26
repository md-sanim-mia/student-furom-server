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
    const result = yield users_service_1.usersServices.getAllUsersForDb(req === null || req === void 0 ? void 0 : req.query);
    res.status(200).json({
        success: true,
        message: "get all users for db",
        data: result,
    });
}));
const logingUsers = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playood = req.body;
    const result = yield users_service_1.usersServices.logingUsersForDb(playood);
    res.status(200).json({
        success: true,
        message: "success fully login",
        data: result,
    });
}));
const getSingleUser = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const email = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.email;
    const result = yield users_service_1.usersServices.getSingleUsersForDb(email);
    res.status(200).json({
        success: true,
        message: "get single user for db",
        data: result,
    });
}));
const getSingleUserById = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userid;
    const result = yield users_service_1.usersServices.getSingleUserFromDBById(id);
    res.status(200).json({
        success: true,
        message: "Get single User successfully",
        data: result
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
const updateSocilLink = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const playood = req.body;
    const userEmail = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.email;
    const result = yield users_service_1.usersServices.updateSocilLinkUsersForDb(userEmail, playood);
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
const addDesignationSingleUsers = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const playood = req.body;
    const result = yield users_service_1.usersServices.addDesignationSingleUsersForDb(userId, playood === null || playood === void 0 ? void 0 : playood.designation);
    res.status(200).json({
        success: true,
        message: "success fully add designation",
        data: result,
    });
}));
const updateRoleSingleUser = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { userId } = req.params;
    const playood = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.roles;
    const result = yield users_service_1.usersServices.updateUserRoleForDb(userId, playood);
    res.status(200).json({
        success: true,
        message: "success fully set the role",
        data: result,
    });
}));
const chengePassword = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_service_1.usersServices.chengePasswordForDb(req === null || req === void 0 ? void 0 : req.user, req.body);
    console.log;
    res.status(200).json({
        success: true,
        message: "success fully chenge password",
        data: result,
    });
}));
const forgotPassword = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const email = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.email;
    const result = yield users_service_1.usersServices.forgotPasswordForDb(email);
    res.status(200).json({
        success: true,
        message: "reset link success fully generated",
        data: result,
    });
}));
const totalData = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Sanim bhai");
    const result = yield users_service_1.usersServices.totalDataForDb();
    console.log("Sanim bhai ", result);
    res.status(200).json({
        success: true,
        message: "totall data for db",
        data: result,
    });
}));
const resetPasswor = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = (_b = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1];
    console.log("it is token ", token);
    const playood = req === null || req === void 0 ? void 0 : req.body;
    const result = yield users_service_1.usersServices.resetPasswordForDb(playood, token);
    console.log(result);
    res.status(200).json({
        success: true,
        message: "success fully updated your password please login !",
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
    addDesignationSingleUsers,
    logingUsers,
    updateRoleSingleUser,
    chengePassword,
    forgotPassword,
    resetPasswor,
    getSingleUserById,
    updateSocilLink,
    totalData,
};
