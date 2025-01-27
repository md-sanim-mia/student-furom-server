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
exports.CommitteeServices = void 0;
const Committee_model_1 = require("./Committee.model");
const mongodb_1 = require("mongodb");
const createCommitteeIntoDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('services ', playload);
    const result = yield Committee_model_1.CommitteeModel.create(playload);
    console.log('resutl ', result);
    return result;
});
const getAllCommitteeFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Committee_model_1.CommitteeModel.find();
    return result;
});
const deletePCommitteesFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield Committee_model_1.CommitteeModel.deleteOne(query);
    return result;
});
const updateCommitteeFromDB = (id, updateDoc) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const update = { $set: updateDoc };
    const option = { new: true };
    const result = yield Committee_model_1.CommitteeModel.updateOne(query, update, option);
    return result;
});
exports.CommitteeServices = {
    createCommitteeIntoDB, deletePCommitteesFromDB,
    updateCommitteeFromDB, getAllCommitteeFromDB
};
