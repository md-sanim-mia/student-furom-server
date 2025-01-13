
import { model, Schema } from "mongoose";
import { TAdvertising } from "./Advertising.interface";

const advertisingSchema = new Schema<TAdvertising>({
    company_name: { type: String, required: true },
    address: { type: String, required: true },
    short_description: { type: String, required: true },
    contact_number: { type: String, required: true },
    rating: { type: Number, required:true },
    image:{type:String,required:true},
   
}
)

export const AdvertisingModel=model<TAdvertising>('advertising',advertisingSchema)