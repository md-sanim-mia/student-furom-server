import express from 'express'
import { tutionController } from './tution.controller'

const router=express.Router()

router.post('/create',tutionController.createTuion)
router.delete('/deleteIt/:id',tutionController.deleteTuion)
router.get('/getAll',tutionController.getAllTuion)
router.get('/getSingle/:id',tutionController.getSingleTution)

export const tutionRoutes=router