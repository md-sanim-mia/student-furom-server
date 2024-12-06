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
exports.bookServices = void 0;
const book_model_1 = require("./book.model");
const mongodb_1 = require("mongodb");
const createBookIntoDB = (playload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.create(playload);
    return result;
});
const getAllBookFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.find();
    return result;
});
const deleteBookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield book_model_1.BookModel.deleteOne(query);
    return result;
});
const updateBookFromDB = (id, updateDoc) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const update = { $set: updateDoc };
    const option = { new: true };
    const result = yield book_model_1.BookModel.updateOne(query, update, option);
    return result;
});
exports.bookServices = {
    createBookIntoDB, getAllBookFromDB,
    deleteBookFromDB, updateBookFromDB
};
