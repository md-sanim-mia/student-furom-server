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
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookData = req.body;
        const result = yield book_services_1.bookServices.createBookIntoDB(bookData);
        res.status(200).json({
            success: true,
            message: "Book created successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.bookServices.getAllBookFromDB();
        res.status(200).json({
            success: true,
            message: "Get All Book successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_services_1.bookServices.deleteBookFromDB(id);
        res.status(200).json({
            success: true,
            message: "Delete Book successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { updateDoc } = req.body;
        const result = yield book_services_1.bookServices.updateBookFromDB(id, updateDoc);
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.bookContrller = {
    createBook, getAllBook, deleteBook, updateBook
};
