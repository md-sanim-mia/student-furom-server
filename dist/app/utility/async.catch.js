"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncCatch = void 0;
const asyncCatch = (fan) => {
    return (req, res, next) => {
        Promise.resolve(fan(req, res, next)).catch((err) => next(err));
    };
};
exports.asyncCatch = asyncCatch;
