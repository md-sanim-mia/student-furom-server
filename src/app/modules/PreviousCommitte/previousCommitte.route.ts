import express from 'express'
import { preivousController } from './previousCommitte.controller'

const router=express.Router()

router.post('/create',preivousController.createPrevious)
router.delete('/deleteIt/:id',preivousController.deletePrevious)
export const PreviousRouters=router