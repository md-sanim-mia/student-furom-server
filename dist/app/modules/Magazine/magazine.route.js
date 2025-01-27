"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineRouters = void 0;
const express_1 = __importDefault(require("express"));
const magazine_controller_1 = require("./magazine.controller");
const router = express_1.default.Router();
router.post('/create', magazine_controller_1.MagazineControllers.createMagazine);
router.get('/getAll', magazine_controller_1.MagazineControllers.getAllMagazine);
router.delete('/deleteIt/:id', magazine_controller_1.MagazineControllers.deleteMagazine);
exports.MagazineRouters = router;
