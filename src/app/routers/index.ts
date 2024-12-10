import express from "express";
import { blogRoutes } from "../modules/Blog/blog.router";
import { bookRouters } from "../modules/Book/book.routes";
import { scheduleRouters } from "../modules/Schedule/schedule.routes";
import { compleneRouters } from "../modules/Complene/complene.routes";

const router = express.Router();
const modulesRouter = [
    {
        path: '/blog',
        route: blogRoutes
    },
    {
        path:'/book',
        route:bookRouters
    },
    {
        path:'/schedule',
        route:scheduleRouters
    },
    {
        path:'/complene',
        route:compleneRouters
    }
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
export default router;
