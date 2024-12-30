"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisngRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Advertising_controller_1 = require("./Advertising.controller");
const router = express_1.default.Router();
router.post('/create-ad', Advertising_controller_1.AdvertisingController.createAdvertising);
router.put('/update-ad/:id', Advertising_controller_1.AdvertisingController.updateAdvertising);
router.get('/getAll-ad', Advertising_controller_1.AdvertisingController.getAdvertising);
router.get('/getSingle-ad/:id', Advertising_controller_1.AdvertisingController.getSingleAdvertising);
router.delete('/delete-ad/:id', Advertising_controller_1.AdvertisingController.deleteAdvertising);
exports.AdvertisngRoutes = router;
