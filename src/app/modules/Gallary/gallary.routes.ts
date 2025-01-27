import express from "express";
import { gallaryControllers } from "./gallary.controller";

const router = express.Router();

router.post("/create", gallaryControllers.createGallary);
router.get("/getAll", gallaryControllers.getAllGallary);
router.delete("/deleteIt/:id", gallaryControllers.deleteGallary);

export const GallaryRouters = router;
