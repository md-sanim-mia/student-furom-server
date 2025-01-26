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
const queryBuilder_1 = __importDefault(require("../../builder/queryBuilder"));
const confing_1 = __importDefault(require("../../confing"));
const mongodb_1 = require("mongodb");
const users_const_1 = require("./users.const");
const users_model_1 = require("./users.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_utils_1 = require("./user.utils");
const sendEmail_1 = require("../../utility/sendEmail");
const blood_request_model_1 = require("../bloodRequest/blood.request.model");
const book_model_1 = require("../Book/book.model");
const createUserForDb = (playood) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield users_model_1.Users.findOne({ email: playood.email });
    if (isExist) {
        throw new Error("This email address is already registered. ");
    }
    const result = yield users_model_1.Users.create(playood);
    return result;
});
const getAllUsersForDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const userQuery = new queryBuilder_1.default(users_model_1.Users.find().select("-password"), query)
        .search(users_const_1.userSearchbleFields)
        .filter()
        .sort()
        .paginate();
    const result = yield (userQuery === null || userQuery === void 0 ? void 0 : userQuery.modelQuery);
    return result;
});
const getSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findOne({ email: userId }).select("-password");
    return result;
});
const updateSingleUsersForDb = (userId, playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findByIdAndUpdate(userId, playood, {
        new: true,
    }).select("-password");
    return result;
});
const deleteSingleUsersForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.Users.findByIdAndDelete(userId);
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
    }, {
        new: true,
    });
    if (result) {
        yield users_model_1.Users.findByIdAndUpdate(userId, { $set: { role: "member" } });
    }
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
    const comperPassword = yield bcrypt_1.default.compare(playood.password, user.password);
    if (!comperPassword) {
        throw new Error("Invalid email or password Please try again!");
    }
    const token = jsonwebtoken_1.default.sign({ email: user.email, role: user.role }, confing_1.default.jwt_scrict, { expiresIn: "3d" });
    return { token, email: user === null || user === void 0 ? void 0 : user.email };
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
const chengePasswordForDb = (userData, playood) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield users_model_1.Users.findOne({
        email: userData === null || userData === void 0 ? void 0 : userData.email,
        role: userData === null || userData === void 0 ? void 0 : userData.role,
    });
    if (!isUserExist) {
        throw new Error("user not found");
    }
    const comperPassword = yield bcrypt_1.default.compare(playood.oldPassword, isUserExist.password);
    if (!comperPassword) {
        throw new Error("The old password is incorrect. Please try again");
    }
    const hasNewPassword = yield bcrypt_1.default.hash(playood.newPassword, 10);
    if (!hasNewPassword) {
        throw new Error(" bcrypt solt generate problem ");
    }
    const result = yield users_model_1.Users.findOneAndUpdate({
        email: userData === null || userData === void 0 ? void 0 : userData.email,
        role: userData === null || userData === void 0 ? void 0 : userData.role,
    }, {
        password: hasNewPassword,
    });
    if (!result) {
        throw new Error(" password chenge problem ");
    }
    return result;
});
const forgotPasswordForDb = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield users_model_1.Users.findOne({
        email: userEmail,
    });
    if (!isUserExist) {
        throw new Error("user not found");
    }
    const jwtPayload = {
        email: isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.email,
        role: isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.role,
    };
    const accessToken = (0, user_utils_1.createToken)(jwtPayload, confing_1.default === null || confing_1.default === void 0 ? void 0 : confing_1.default.jwt_scrict, "6m");
    const resetUiLink = `http://localhost:5173/reset-password/${isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist._id}/${accessToken}`;
    (0, sendEmail_1.sendEmail)(isUserExist.email, resetUiLink);
});
const resetPasswordForDb = (playood, token) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield users_model_1.Users.findOne({
        _id: playood.id,
    });
    if (!isUserExist) {
        throw new Error("user not found");
    }
    const decoded = jsonwebtoken_1.default.verify(token, confing_1.default.jwt_scrict);
    const user = yield users_model_1.Users.findOne({ _id: playood === null || playood === void 0 ? void 0 : playood.id });
    console.log("user services ", user);
    if (!user) {
        throw new Error("you are  unauthorization");
    }
    if ((user === null || user === void 0 ? void 0 : user.email) !== decoded.email) {
        throw new Error("you are  unauthorization");
    }
    const hasNewPassword = yield bcrypt_1.default.hash(playood.newPassword, 10);
    if (!hasNewPassword) {
        throw new Error("bcrypt solt generate problem");
    }
    const resetPassword = yield users_model_1.Users.findOneAndUpdate({ _id: playood.id }, {
        password: hasNewPassword,
    }, {
        new: true,
        runValidators: true,
    });
    return null;
});
const getSingleUserFromDBById = (userid) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(userid) };
    const result = yield users_model_1.Users.find(query);
    return result;
});
const updateSocilLinkUsersForDb = (email, playood) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(email);
    const result = yield users_model_1.Users.findOneAndUpdate({ email: email }, playood, {
        new: true,
    }).select("-password");
    return result;
});
const totalDataForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield users_model_1.Users.find({})).length;
    const result1 = (yield blood_request_model_1.BloodRequest.find({})).length;
    const result2 = (yield book_model_1.BookModel.find({})).length;
    const result3 = (yield users_model_1.Users.find({})).length;
    return {
        totallUser: result,
        totallBloodRequest: result1,
        totallBookRequest: result2,
        totallTusationRequest: result3,
    };
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
    chengePasswordForDb,
    forgotPasswordForDb,
    resetPasswordForDb,
    getSingleUserFromDBById,
    updateSocilLinkUsersForDb,
    totalDataForDb,
};
