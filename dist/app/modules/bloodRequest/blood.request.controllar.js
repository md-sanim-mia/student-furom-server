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
exports.bloodRequestControllar = void 0;
const async_catch_1 = require("../../utility/async.catch");
const blood_request_service_1 = require("./blood.request.service");
const createBloodRequest = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playood = req.body;
    const result = yield blood_request_service_1.bloodRequestService.createBloodRequestForDb(playood);
    res.status(200).json({
        success: true,
        message: "blood request success fully created",
        data: result,
    });
}));
const getAllBloodRequest = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_service_1.bloodRequestService.getAllBloodRequestForDb(req.query);
    res.status(200).json({
        success: true,
        message: "get all blood request for db",
        data: result,
    });
}));
const getSingleBloodRequest = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bloodRequestId } = req.params;
    const result = yield blood_request_service_1.bloodRequestService.getSingleBloodRequestForDb(bloodRequestId);
    res.status(200).json({
        success: true,
        message: "get single blood request for db",
        data: result,
    });
}));
const pendingBloodRequest = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blood_request_service_1.bloodRequestService.pendingBloodRequestForDb();
    res.status(200).json({
        success: true,
        message: "get pending blood request for db",
        data: result,
    });
}));
const deletedSingleBloodRequest = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bloodRequestId } = req.params;
    const result = yield blood_request_service_1.bloodRequestService.deleteSingleBloodRequestForDb(bloodRequestId);
    res.status(200).json({
        success: true,
        message: "deleted blood request for db ",
        data: result,
    });
}));
const approvedSingleBloodRequest = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bloodRequestId } = req.params;
    const result = yield blood_request_service_1.bloodRequestService.ApproveStatusSingleBloodRequestForDb(bloodRequestId);
    res.status(200).json({
        success: true,
        message: "blood request satus approved for db ",
        data: result,
    });
}));
const rejectedSingleBloodRequest = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bloodRequestId } = req.params;
    const result = yield blood_request_service_1.bloodRequestService.rejectStatusSingleBloodRequestForDb(bloodRequestId);
    res.status(200).json({
        success: true,
        message: " blood request satus rejected for db ",
        data: result,
    });
}));
exports.bloodRequestControllar = {
    createBloodRequest,
    getAllBloodRequest,
    getSingleBloodRequest,
    deletedSingleBloodRequest,
    pendingBloodRequest,
    approvedSingleBloodRequest,
    rejectedSingleBloodRequest,
};
