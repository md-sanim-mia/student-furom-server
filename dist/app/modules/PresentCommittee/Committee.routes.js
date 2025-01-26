"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitteRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Committee_controller_1 = require("./Committee.controller");
const router = express_1.default.Router();
router.post('/create', Committee_controller_1.CommitteController.createCommittee);
router.get('/getAll', Committee_controller_1.CommitteController.getAllCommittee);
router.delete('/deleteIt/:id', Committee_controller_1.CommitteController.deleteCommittee);
router.put('/update/:id', Committee_controller_1.CommitteController.updateCommittee);
exports.CommitteRoutes = router;
