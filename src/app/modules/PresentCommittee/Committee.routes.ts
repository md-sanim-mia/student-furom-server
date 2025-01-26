import express from 'express'
import { CommitteController } from './Committee.controller'

const router=express.Router()

router.post('/create',CommitteController.createCommittee)
router.get('/getAll',CommitteController.getAllCommittee)
router.delete('/deleteIt/:id',CommitteController.deleteCommittee)
router.put('/update/:id',CommitteController.updateCommittee)

export const CommitteRoutes=router