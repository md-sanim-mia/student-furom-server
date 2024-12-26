import express from "express";
import { AdvertisingController } from "./Advertising.controller";

const router=express.Router()

router.post('/create-ad',AdvertisingController.createAdvertising)
router.put('/update-ad',AdvertisingController.updateAdvertising)
router.get('/getAll-ad',AdvertisingController.getAdvertising)
router.delete('/delete-ad',AdvertisingController.deleteAdvertising)
export const AdvertisngRoutes=router