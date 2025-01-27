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
exports.tuionServices = void 0;
const tution_model_1 = require("./tution.model");
const mongodb_1 = require("mongodb");
const getAllTutionFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tution_model_1.tutionModel.find();
    return result;
});
const createTutionIntoDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tution_model_1.tutionModel.create(playload);
    return result;
});
const deleteTutionIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield tution_model_1.tutionModel.deleteOne(query);
    return result;
});
const getSingleTutionReqFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield tution_model_1.tutionModel.find(query);
    return result;
});
exports.tuionServices = {
    getAllTutionFormDB, createTutionIntoDB,
    deleteTutionIntoDB, getSingleTutionReqFromDB
};
