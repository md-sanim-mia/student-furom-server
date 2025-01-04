"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviousRouters = void 0;
const express_1 = __importDefault(require("express"));
const previousCommitte_controller_1 = require("./previousCommitte.controller");
const router = express_1.default.Router();
router.post('/create', previousCommitte_controller_1.preivousController.createPrevious);
router.delete('/deleteIt/:id', previousCommitte_controller_1.preivousController.deletePrevious);
exports.PreviousRouters = router;
