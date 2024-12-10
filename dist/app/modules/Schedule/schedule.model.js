"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleModel = void 0;
const mongoose_1 = require("mongoose");
const scheduleSchema = new mongoose_1.Schema({
    heading: { type: String, required: true },
    event_name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    note: { type: String, required: false }
});
exports.scheduleModel = (0, mongoose_1.model)('schedule', scheduleSchema);
