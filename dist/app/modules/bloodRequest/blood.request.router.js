"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validationRequest_1 = require("../../middlwares/validationRequest");
const blood_request_validation_1 = __importDefault(require("./blood.request.validation"));
const blood_request_controllar_1 = require("./blood.request.controllar");
const router = express_1.default.Router();
router.post("/create-blood-request", (0, validationRequest_1.validationRequest)(blood_request_validation_1.default), blood_request_controllar_1.bloodRequestControllar.createBloodRequest);
router.get("/get-blood-request", blood_request_controllar_1.bloodRequestControllar.getAllBloodRequest);
router.get("/:bloodRequestId", blood_request_controllar_1.bloodRequestControllar.getSingleBloodRequest);
router.get("/pending-blood-request", blood_request_controllar_1.bloodRequestControllar.pendingBloodRequest);
router.delete("/:bloodRequestId", blood_request_controllar_1.bloodRequestControllar.deletedSingleBloodRequest);
