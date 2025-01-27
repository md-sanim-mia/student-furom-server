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
exports.tutionController = void 0;
const async_catch_1 = require("../../utility/async.catch");
const tution_services_1 = require("./tution.services");
const getAllTuion = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tution_services_1.tuionServices.getAllTutionFormDB();
    res.status(200).json({
        success: true,
        message: "All tution geted succesfully",
        data: result,
    });
}));
const createTuion = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tutionData = req.body;
    const result = yield tution_services_1.tuionServices.createTutionIntoDB(tutionData);
    res.status(200).json({
        success: true,
        message: "Tution request created succesfully",
        data: result,
    });
}));
const deleteTuion = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield tution_services_1.tuionServices.deleteTutionIntoDB(id);
    res.status(200).json({
        success: true,
        message: "Tution Request deleted successfully",
        data: result,
    });
}));
const getSingleTution = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield tution_services_1.tuionServices.getSingleTutionReqFromDB(id);
    res.status(200).json({
        success: true,
        message: "Get single tution successfully",
        data: result,
    });
}));
exports.tutionController = {
    deleteTuion,
    getAllTuion,
    createTuion,
    getSingleTution,
};
