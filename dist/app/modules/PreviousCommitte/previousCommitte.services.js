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
exports.previousServices = void 0;
const previousCommitte_model_1 = require("./previousCommitte.model");
const mongodb_1 = require("mongodb");
const createPreviousIntoDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield previousCommitte_model_1.PreviousModel.create(playload);
    return result;
});
const deletePriviousFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield previousCommitte_model_1.PreviousModel.deleteOne(query);
    return result;
});
exports.previousServices = {
    createPreviousIntoDB, deletePriviousFromDB
};
