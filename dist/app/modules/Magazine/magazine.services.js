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
exports.MagazineServices = void 0;
const magazine_model_1 = require("./magazine.model");
const mongodb_1 = require("mongodb");
const createMagazineIntoDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield magazine_model_1.MagazineModel.create(playload);
    return result;
});
const getAllMagazineFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield magazine_model_1.MagazineModel.find();
    return result;
});
const deleteMagazineFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield magazine_model_1.MagazineModel.deleteOne(query);
    return result;
});
exports.MagazineServices = {
    createMagazineIntoDB,
    getAllMagazineFromDB,
    deleteMagazineFromDB,
};
