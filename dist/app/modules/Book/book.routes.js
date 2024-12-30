"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouters = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/create-book', book_controller_1.bookContrller.createBook);
router.get('/getAll-book', book_controller_1.bookContrller.getAllBook);
router.get('/getSingleBook/:id', book_controller_1.bookContrller.getSingleBook);
router.delete('/delete-book/:id', book_controller_1.bookContrller.deleteBook);
router.put('/book-update/:id', book_controller_1.bookContrller.updateBook);
exports.bookRouters = router;
