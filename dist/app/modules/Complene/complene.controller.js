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
exports.compleneContrller = void 0;
const async_catch_1 = require("../../utility/async.catch");
const complene_services_1 = require("./complene.services");
const createComplene = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const compleneData = req.body;
    const result = yield complene_services_1.compleneServices.createCompleneIntoDB(compleneData);
    res.status(200).json({
        success: true,
        message: "Complene Created Successfully",
        data: result
    });
}));
const getAllComplene = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield complene_services_1.compleneServices.getAllCompleneFromDB();
    res.status(200).json({
        success: true,
        message: "Get all complene successfully",
        data: result
    });
}));
const deleteComplene = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield complene_services_1.compleneServices.deleteCompleneFromDB(id);
    res.status(200).json({
        success: true,
        message: "Complene deleted successfully",
        data: result
    });
}));
exports.compleneContrller = {
    createComplene, deleteComplene, getAllComplene
};
