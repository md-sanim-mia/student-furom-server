"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const tution_controller_1 = require("./tution.controller");
const router = express_1.default.Router();
router.post("/create", tution_controller_1.tutionController.createTuion);
router.delete("/deleteIt/:id", tution_controller_1.tutionController.deleteTuion);
router.get("/getAll", tution_controller_1.tutionController.getAllTuion);
router.get("/getSingle/:id", tution_controller_1.tutionController.getSingleTution);
exports.tutionRoutes = router;
