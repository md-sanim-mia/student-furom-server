import express from "express";
import { usersRouters } from "../modules/users/users.router";

const router = express.Router();
const modulesRouter = [
  {
    path: "/users",
    route: usersRouters,
  },
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
export default router;
