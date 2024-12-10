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
exports.bloodRequestService = void 0;
const blood_request_model_1 = require("./blood.request.model");
const createBloodRequestForDb = (playood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_model_1.BloodRequest.create(playood);
    return result;
});
const getAllBloodRequestForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_model_1.BloodRequest.find({});
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
exports.bloodRequestService = {
    createBloodRequestForDb,
    getAllBloodRequestForDb,
    getSingleBloodRequestForDb,
    deleteSingleBloodRequestForDb,
    pendingBloodRequestForDb,
};
