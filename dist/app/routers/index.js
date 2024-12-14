"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_router_1 = require("../modules/Blog/blog.router");
const book_routes_1 = require("../modules/Book/book.routes");
const schedule_routes_1 = require("../modules/Schedule/schedule.routes");
const complene_routes_1 = require("../modules/Complene/complene.routes");
const users_router_1 = require("../modules/users/users.router");
const router = express_1.default.Router();
const modulesRouter = [
    {
        path: '/blog',
        route: blog_router_1.blogRoutes
    },
    {
        path: '/book',
        route: book_routes_1.bookRouters
    },
    {
        path: '/schedule',
        route: schedule_routes_1.scheduleRouters
    },
    {
        path: '/complene',
        route: complene_routes_1.compleneRouters
    },
    {
        path: "/users",
        route: users_router_1.usersRouters,
    },
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
