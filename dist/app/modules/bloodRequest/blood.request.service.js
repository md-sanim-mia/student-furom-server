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
exports.bloodRequestService = void 0;
const queryBuilder_1 = __importDefault(require("../../builder/queryBuilder"));
const blood_request_constant_1 = require("./blood.request.constant");
const blood_request_model_1 = require("./blood.request.model");
const createBloodRequestForDb = (playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_model_1.BloodRequest.create(playood);
    return result;
});
const getAllBloodRequestForDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const userQuery = new queryBuilder_1.default(blood_request_model_1.BloodRequest.find(), query)
        .search(blood_request_constant_1.BloodRequestSearchbleFields)
        .filter()
        .sort()
        .paginate();
    const result = yield (userQuery === null || userQuery === void 0 ? void 0 : userQuery.modelQuery);
    return result;
});
const getSingleBloodRequestForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_model_1.BloodRequest.findOne({ _id: userId });
    return result;
});
const pendingBloodRequestForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_model_1.BloodRequest.findOne({ status: "pending" });
    return result;
});
const deleteSingleBloodRequestForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_model_1.BloodRequest.deleteOne({ _id: userId });
    return result;
});
const ApproveStatusSingleBloodRequestForDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_model_1.BloodRequest.findByIdAndUpdate(id, {
        $set: { status: "approved" },
    }, {
        new: true,
    });
    return result;
});
const rejectStatusSingleBloodRequestForDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_model_1.BloodRequest.findByIdAndUpdate(id, {
        $set: { status: "rejected" },
    }, {
        new: true,
    });
    return result;
});
exports.bloodRequestService = {
    createBloodRequestForDb,
    getAllBloodRequestForDb,
    getSingleBloodRequestForDb,
    deleteSingleBloodRequestForDb,
    pendingBloodRequestForDb,
    ApproveStatusSingleBloodRequestForDb,
    rejectStatusSingleBloodRequestForDb,
};
