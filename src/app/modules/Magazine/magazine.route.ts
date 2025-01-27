import express from "express"
import { MagazineControllers } from "./magazine.controller"
const router=express.Router()

router.post('/create',MagazineControllers.createMagazine)
router.get('/getAll',MagazineControllers.getAllMagazine)
router.delete('/deleteIt/:id',MagazineControllers.deleteMagazine)

export const MagazineRouters=router
