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
exports.AdvertisingController = void 0;
const async_catch_1 = require("../../utility/async.catch");
const Advertising_services_1 = require("./Advertising.services");
const createAdvertising = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertising = req.body;
    console.log("it is ad ", advertising);
    const result = yield Advertising_services_1.advertisingServices.createAdvertisingIntoDB(advertising);
    res.status(200).json({
        success: true,
        message: "Advertising data created successfully",
        data: result
    });
}));
const updateAdvertising = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateDoc = req.body;
    const result = yield Advertising_services_1.advertisingServices.updateAdvertisingIntoDB(id, updateDoc);
    res.status(200).json({
        success: true,
        message: "Advertising updated successfully",
        data: result
    });
}));
const getAdvertising = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Advertising_services_1.advertisingServices.getAllAdvertisingFromDB();
    res.status(200).json({
        success: true,
        message: "All advertising getted successfully",
        data: result
    });
}));
const getSingleAdvertising = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield Advertising_services_1.advertisingServices.getSingleAdvertisingFromDB(id);
    res.status(200).json({
        success: true,
        message: "Single advertising getted successfully",
        data: result
    });
}));
const deleteAdvertising = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield Advertising_services_1.advertisingServices.deleteAdvertisingFromDB(id);
    res.status(200).json({
        success: true,
        message: "Advertising deleted successfully",
        data: result
    });
}));
exports.AdvertisingController = {
    createAdvertising, updateAdvertising,
    getAdvertising, deleteAdvertising,
    getSingleAdvertising
};
