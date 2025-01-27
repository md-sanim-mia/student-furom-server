import { model, Schema } from "mongoose";
import { TpreviousCommitte } from "./previousCommitte.interface";

const previousSchema = new Schema<TpreviousCommitte>({
  name: { type: String, required: true },
  session: { type: String, required: true },
  image: { type: String, required: true },
  designation: { type: String, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
});

export const PreviousModel = model<TpreviousCommitte>(
  "previousCommitte",
  previousSchema
);
