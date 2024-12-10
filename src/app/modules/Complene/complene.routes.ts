import express from 'express'
import { compleneContrller } from './complene.controller'

const router=express.Router()

router.post('/create',compleneContrller.createComplene)
router.delete('/delete',compleneContrller.deleteComplene)
export const compleneRouters=router