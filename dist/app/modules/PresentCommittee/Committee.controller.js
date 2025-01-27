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
exports.CommitteController = void 0;
const async_catch_1 = require("../../utility/async.catch");
const Committee_services_1 = require("./Committee.services");
const getAllCommittee = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Committee_services_1.CommitteeServices.getAllCommitteeFromDB();
    res.status(200).json({
        success: true,
        message: "All committee geted succesfully",
        data: result,
    });
}));
const createCommittee = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const committeeData = req.body;
    console.log("abc ", committeeData);
    const result = yield Committee_services_1.CommitteeServices.createCommitteeIntoDB(committeeData);
    res.status(200).json({
        success: true,
        message: "Committee created succesfully",
        data: result,
    });
}));
const deleteCommittee = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield Committee_services_1.CommitteeServices.deletePCommitteesFromDB(id);
    res.status(200).json({
        success: true,
        message: "Committee deleted successfully",
        data: result,
    });
}));
const updateCommittee = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateDoc = req.body;
    const result = yield Committee_services_1.CommitteeServices.updateCommitteeFromDB(id, updateDoc);
    res.status(200).json({
        success: true,
        message: "Committee updated successfully",
        data: result,
    });
}));
exports.CommitteController = {
    createCommittee,
    deleteCommittee,
    getAllCommittee,
    updateCommittee,
};
