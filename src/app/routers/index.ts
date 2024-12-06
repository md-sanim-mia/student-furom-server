import express from "express";
import { blogRoutes } from "../modules/Blog/blog.router";
import { bookRouters } from "../modules/Book/book.routes";

const router = express.Router();
const modulesRouter = [
    {
        path: '/blog',
        route: blogRoutes
    },
    {
        path:'/book',
        route:bookRouters
    }
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
export default router;
