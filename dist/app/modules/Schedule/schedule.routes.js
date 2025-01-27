"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRouters = void 0;
const express_1 = __importDefault(require("express"));
const schedule_controller_1 = require("./schedule.controller");
const router = express_1.default.Router();
router.get("/getSchedule", schedule_controller_1.scheduleController.getAllSchedule);
router.post("/create", schedule_controller_1.scheduleController.createShedule);
router.delete("/delete/:id", schedule_controller_1.scheduleController.deleteSchedule);
router.put("/update/:id", schedule_controller_1.scheduleController.updateSchedule);
exports.scheduleRouters = router;
