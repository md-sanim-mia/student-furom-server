import { model, Schema } from "mongoose";
import { TComplene } from "./complene.interface";

const compleneSchema = new Schema<TComplene>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

export const compleneModel = model<TComplene>("complenes", compleneSchema);
