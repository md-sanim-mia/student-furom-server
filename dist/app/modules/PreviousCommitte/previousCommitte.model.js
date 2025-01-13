"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviousModel = void 0;
const mongoose_1 = require("mongoose");
const previousSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    session: { type: String, required: true },
    image: { type: String, required: true },
    designation: { type: String, required: true },
    address: { type: String, required: true },
    department: { type: String, required: true }
});
exports.PreviousModel = (0, mongoose_1.model)('previousCommitte', previousSchema);
