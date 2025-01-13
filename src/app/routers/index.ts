import express from "express";
import { blogRoutes } from "../modules/Blog/blog.router";
import { bookRouters } from "../modules/Book/book.routes";
import { scheduleRouters } from "../modules/Schedule/schedule.routes";
import { compleneRouters } from "../modules/Complene/complene.routes";
import { usersRouters } from "../modules/users/users.router";
import { bloodRequestRouter } from "../modules/bloodRequest/blood.request.router";
const router = express.Router();

const modulesRouter = [
  {
    path: "/blog",
    route: blogRoutes,
  },
  {
    path: "/book",
    route: bookRouters,
  },
  {
    path: "/schedule",
    route: scheduleRouters,
  },
  {
    path: "/complene",
    route: compleneRouters,
  },
  {
    path: "/users",
    route: usersRouters,
  },
  {
    path: "/blood-request",
    route: bloodRequestRouter,
  },
];

modulesRouter.forEach((route) => router.use(route.path, route.route));
export default router;
