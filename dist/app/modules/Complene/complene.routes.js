"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compleneRouters = void 0;
const express_1 = __importDefault(require("express"));
const complene_controller_1 = require("./complene.controller");
const router = express_1.default.Router();
router.post('/create', complene_controller_1.compleneContrller.createComplene);
router.delete('/delete', complene_controller_1.compleneContrller.deleteComplene);
exports.compleneRouters = router;
