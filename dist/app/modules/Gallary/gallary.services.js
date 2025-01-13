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
exports.GallaryServices = void 0;
const gallary_model_1 = require("./gallary.model");
const mongodb_1 = require("mongodb");
const createGallaryIntoDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallary_model_1.GallaryModel.create(playload);
    return result;
});
const getAllGallaryFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallary_model_1.GallaryModel.find();
    return result;
});
const deleteGallaryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield gallary_model_1.GallaryModel.deleteOne(query);
    return result;
});
exports.GallaryServices = {
    createGallaryIntoDB, getAllGallaryFromDB,
    deleteGallaryFromDB
};
