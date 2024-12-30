import express from "express"
import { scheduleController } from "./schedule.controller"

const router=express.Router()

router.post('/create',scheduleController.createShedule)
router.delete('/delete/:id',scheduleController.deleteSchedule)
router.put('/update/:id',scheduleController.updateSchedule)
export const scheduleRouters=router