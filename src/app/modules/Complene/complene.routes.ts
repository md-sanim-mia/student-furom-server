import express from 'express'
import { compleneContrller } from './complene.controller'

const router=express.Router()

router.post('/create',compleneContrller.createComplene)
router.delete('/delete/:id',compleneContrller.deleteComplene)
router.get('/getAll',compleneContrller.getAllComplene)
export const compleneRouters=router