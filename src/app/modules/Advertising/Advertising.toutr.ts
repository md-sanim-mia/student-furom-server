import express from "express";
import { AdvertisingController } from "./Advertising.controller";

const router=express.Router()

router.post('/create-ad',AdvertisingController.createAdvertising)
router.put('/update-ad/:id',AdvertisingController.updateAdvertising)
router.get('/getAll-ad',AdvertisingController.getAdvertising)
router.get('/getSingle-ad/:id',AdvertisingController.getSingleAdvertising)
router.delete('/delete-ad/:id',AdvertisingController.deleteAdvertising)
export const AdvertisngRoutes=router