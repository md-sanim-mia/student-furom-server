"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_router_1 = require("../modules/Blog/blog.router");
const router = express_1.default.Router();
const modulesRouter = [
    {
        path: '/blog',
        route: blog_router_1.blogRoutes
    }
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
