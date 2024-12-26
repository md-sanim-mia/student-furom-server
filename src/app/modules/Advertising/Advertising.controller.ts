import { asyncCatch } from "../../utility/async.catch";
import { advertisingServices } from "./Advertising.services";

const createAdvertising = asyncCatch(async (req, res) => {
  
    const  advertising  = req.body;
    const result = await advertisingServices.createAdvertisingIntoDB(advertising)
    res.status(200).json({
        success: true,
        message: "Advertising data created successfully",
        data: result
    })

})
const updateAdvertising =asyncCatch(async (req,res)=>{
    
    const id=req.params.id
    const updateDoc=req.body
    const result=await advertisingServices.updateAdvertisingIntoDB(id,updateDoc)
    res.status(200).json({
       success: true,
       message: "Advertising updated successfully",
       data: result
   })

})

const getAdvertising=asyncCatch(async (req,res)=>{
   
    const result=await advertisingServices.getAllAdvertisingFromDB()
    res.status(200).json({
        success: true,
        message: "All advertising getted successfully",
        data: result
    })

}) 

const deleteAdvertising = asyncCatch(async (req, res) => {
 
    const id = req.params.id;
    const result = await advertisingServices.deleteAdvertisingFromDB(id)
    res.status(200).json({
        success: true,
        message: "Advertising deleted successfully",
        data: result
    })

})
export  const AdvertisingController={
    createAdvertising, updateAdvertising,
    getAdvertising, deleteAdvertising
}