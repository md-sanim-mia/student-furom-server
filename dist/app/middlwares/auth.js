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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const confing_1 = __importDefault(require("../confing"));
const users_model_1 = require("../modules/users/users.model");
const async_catch_1 = require("../utility/async.catch");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (...requireRole) => {
    return (0, async_catch_1.asyncCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            throw new Error("you are not authorization");
        }
        const decoded = jsonwebtoken_1.default.verify(token, confing_1.default.jwt_scrict);
        const { email, role } = decoded;
        const isExist = yield users_model_1.Users.findOne({ email, role }).select("-password");
        if (!isExist) {
            throw new Error("you are not authorization");
        }
        if (requireRole && !requireRole.includes(role)) {
            throw new Error("you are not authorization");
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
