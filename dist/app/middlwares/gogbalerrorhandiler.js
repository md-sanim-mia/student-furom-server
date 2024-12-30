"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gobalErrorHandilers = (err, req, res, next) => {
    const statusCode = 500;
    const message = err.message || "somthing waent wrong";
    res.status(statusCode).json({ success: false, message, erorr: err });
    return;
};
exports.default = gobalErrorHandilers;
