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
exports.bookContrller = void 0;
const book_services_1 = require("./book.services");
const async_catch_1 = require("../../utility/async.catch");
const createBook = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = req.body;
    const result = yield book_services_1.bookServices.createBookIntoDB(bookData);
    res.status(200).json({
        success: true,
        message: "Book created successfully",
        data: result
    });
}));
const getAllBook = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let search = '';
    if (req.query.q) {
        search = String(req.query.q);
    }
    const result = yield book_services_1.bookServices.getAllBookFromDB(search);
    res.status(200).json({
        success: true,
        message: "Get All Book successfully",
        data: result
    });
}));
const deleteBook = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_services_1.bookServices.deleteBookFromDB(id);
    res.status(200).json({
        success: true,
        message: "Delete Book successfully",
        data: result
    });
}));
const updateBook = (0, async_catch_1.asyncCatch)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { updateDoc } = req.body;
    const result = yield book_services_1.bookServices.updateBookFromDB(id, updateDoc);
    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: result
    });
}));
exports.bookContrller = {
    createBook, getAllBook, deleteBook, updateBook,
};
