"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineModel = void 0;
const mongoose_1 = require("mongoose");
const MagazineSchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    written_by: { type: String, required: true },
});
exports.MagazineModel = (0, mongoose_1.model)("magazine", MagazineSchema);
