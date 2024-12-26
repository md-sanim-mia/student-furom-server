"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisingModel = void 0;
const mongoose_1 = require("mongoose");
const advertisingSchema = new mongoose_1.Schema({
    company_name: { type: String, required: true },
    address: { type: String, required: true },
    short_description: { type: String, required: true },
    company_logo_image: { type: String, required: true },
    contact_number: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
    status: { type: Boolean, default: true }
});
exports.AdvertisingModel = (0, mongoose_1.model)('advertising', advertisingSchema);
