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
exports.scheduleServices = void 0;
const schedule_model_1 = require("./schedule.model");
const mongodb_1 = require("mongodb");
const createScheduleIntoDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schedule_model_1.scheduleModel.create(playload);
    return result;
});
const deleteScheduleIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield schedule_model_1.scheduleModel.deleteOne(query);
    return result;
});
const updateScheduleFromDB = (id, updateDoc) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const update = { $set: updateDoc };
    const option = { new: true };
    const result = yield schedule_model_1.scheduleModel.updateOne(query, update, option);
    return result;
});
exports.scheduleServices = {
    createScheduleIntoDB, deleteScheduleIntoDB, updateScheduleFromDB
};
