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
exports.gallaryControllers = void 0;
const async_catch_1 = require("../../utility/async.catch");
const gallary_services_1 = require("./gallary.services");
const createGallary = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gallaryData = req.body;
    const result = yield gallary_services_1.GallaryServices.createGallaryIntoDB(gallaryData);
    res.status(200).json({
        success: true,
        message: "Gallary created succesfully",
        data: result
    });
}));
const getAllGallary = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallary_services_1.GallaryServices.getAllGallaryFromDB();
    res.status(200).json({
        success: true,
        message: "All gallary geted succesfully",
        data: result
    });
}));
const deleteGallary = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield gallary_services_1.GallaryServices.deleteGallaryFromDB(id);
    res.status(200).json({
        success: true,
        message: "Gallary deleted successfully",
        data: result
    });
}));
exports.gallaryControllers = {
    createGallary, getAllGallary, deleteGallary
};
