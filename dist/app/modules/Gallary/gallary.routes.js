"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GallaryRouters = void 0;
const express_1 = __importDefault(require("express"));
const gallary_controller_1 = require("./gallary.controller");
const router = express_1.default.Router();
router.post("/create", gallary_controller_1.gallaryControllers.createGallary);
router.get("/getAll", gallary_controller_1.gallaryControllers.getAllGallary);
router.delete("/deleteIt/:id", gallary_controller_1.gallaryControllers.deleteGallary);
exports.GallaryRouters = router;
