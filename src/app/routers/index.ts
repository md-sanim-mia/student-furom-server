import express from "express";
import { blogRoutes } from "../modules/Blog/blog.router";
import { bookRouters } from "../modules/Book/book.routes";
import { scheduleRouters } from "../modules/Schedule/schedule.routes";
import { compleneRouters } from "../modules/Complene/complene.routes";
import { usersRouters } from "../modules/users/users.router";
import { AdvertisngRoutes } from "../modules/Advertising/Advertising.toutr";
import { PreviousRouters } from "../modules/PreviousCommitte/previousCommitte.route";
import { GallaryRouters } from "../modules/Gallary/gallary.routes";
import { MagazineRouters } from "../modules/Magazine/magazine.route";

const router = express.Router();

const modulesRouter = [
    {
        path: '/blog',
        route: blogRoutes
    },
    {
        path: '/book',
        route: bookRouters
    },
    {
        path: '/schedule',
        route: scheduleRouters
    },
    {
        path: '/complene',
        route: compleneRouters
    },
    {
        path: "/users",
        route: usersRouters,
    },
    {
        path:'/add',
        route:AdvertisngRoutes
    },
    {
        path:'/previousCommitte',
        route:PreviousRouters
    },
    {
        path:'/gallary',
        route:GallaryRouters
    },
    {
        path:'/magazine',
        route:MagazineRouters
    }
]




modulesRouter.forEach((route) => router.use(route.path, route.route));
export default router;
