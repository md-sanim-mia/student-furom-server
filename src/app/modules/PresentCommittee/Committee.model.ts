import { model, Schema } from "mongoose";
import { TCommittee } from "./Committee.interface";

const CommitteeSchema = new Schema<TCommittee>({
  image: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  designation: { type: String, required: true },
  session: { type: String, required: true },
  link: { type: String, required: true },
  duration: { type: String, required: true },
});

export const CommitteeModel = model<TCommittee>(
  "PresentCommittee",
  CommitteeSchema
);
