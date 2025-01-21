"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitteeModel = void 0;
const mongoose_1 = require("mongoose");
const CommitteeSchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    session: { type: String, required: true },
    link: { type: String, required: true },
    duration: { type: String, required: true }
});
exports.CommitteeModel = (0, mongoose_1.model)('PresentCommittee', CommitteeSchema);
