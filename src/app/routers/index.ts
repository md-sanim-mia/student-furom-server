import express from "express";
import { blogRoutes } from "../modules/Blog/blog.router";

const router = express.Router();
const modulesRouter = [
    {
        path: '/blog',
        route: blogRoutes
    }
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
export default router;
