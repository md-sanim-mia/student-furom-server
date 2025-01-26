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
exports.MagazineControllers = void 0;
const async_catch_1 = require("../../utility/async.catch");
const magazine_services_1 = require("./magazine.services");
const createMagazine = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const magazineData = req.body;
    const result = yield magazine_services_1.MagazineServices.createMagazineIntoDB(magazineData);
    res.status(200).json({
        success: true,
        message: "Magazine created succesfully",
        data: result
    });
}));
const getAllMagazine = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield magazine_services_1.MagazineServices.getAllMagazineFromDB();
    res.status(200).json({
        success: true,
        message: "All magazine geted succesfully",
        data: result
    });
}));
const deleteMagazine = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield magazine_services_1.MagazineServices.deleteMagazineFromDB(id);
    res.status(200).json({
        success: true,
        message: "Magazine deleted successfully",
        data: result
    });
}));
exports.MagazineControllers = {
    createMagazine, getAllMagazine, deleteMagazine
};
