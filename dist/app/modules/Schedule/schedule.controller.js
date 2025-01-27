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
exports.scheduleController = void 0;
const async_catch_1 = require("../../utility/async.catch");
const schedule_services_1 = require("./schedule.services");
const getAllSchedule = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schedule_services_1.scheduleServices.getAllSceduleFormDB();
    res.status(200).json({
        success: true,
        message: "All schedule geted succesfully",
        data: result,
    });
}));
const createShedule = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const scheduledata = req.body;
    const result = yield schedule_services_1.scheduleServices.createScheduleIntoDB(scheduledata);
    res.status(200).json({
        success: true,
        message: "schedule created succesfully",
        data: result,
    });
}));
const deleteSchedule = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield schedule_services_1.scheduleServices.deleteScheduleIntoDB(id);
    res.status(200).json({
        success: true,
        message: "schedule deleted successfully",
        data: result,
    });
}));
const updateSchedule = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateDoc = req.body;
    const result = yield schedule_services_1.scheduleServices.updateScheduleFromDB(id, updateDoc);
    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: result,
    });
}));
exports.scheduleController = {
    createShedule,
    deleteSchedule,
    updateSchedule,
    getAllSchedule,
};
