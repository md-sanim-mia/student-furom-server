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
exports.preivousController = void 0;
const async_catch_1 = require("../../utility/async.catch");
const previousCommitte_services_1 = require("./previousCommitte.services");
const createPrevious = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const previousCommitte = req.body;
    const result = yield previousCommitte_services_1.previousServices.createPreviousIntoDB(previousCommitte);
    res.status(200).json({
        success: true,
        message: "Previous Committe Created Successfully",
        data: result,
    });
}));
const getAllPrevious = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield previousCommitte_services_1.previousServices.getAllPreviousFromDB();
    res.status(200).json({
        success: true,
        message: "Previous Committe Geted Successfully",
        data: result,
    });
}));
const deletePrevious = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield previousCommitte_services_1.previousServices.deletePriviousFromDB(id);
    res.status(200).json({
        success: true,
        message: "Previous Committe Successfully Deleted",
        data: result,
    });
}));
exports.preivousController = {
    createPrevious,
    deletePrevious,
    getAllPrevious,
};
