"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_router_1 = require("../modules/users/users.router");
const router = express_1.default.Router();
const modulesRouter = [
    {
        path: "/users",
        route: users_router_1.usersRouters,
    },
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
