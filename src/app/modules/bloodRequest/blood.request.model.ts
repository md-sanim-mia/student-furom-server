import { model, Schema } from "mongoose";
import { TBloodRequest } from "./blood.request.interface";
import { BloodGroup, Genders, Status } from "./blood.request.constant";

const bloodRequestSchema = new Schema<TBloodRequest>({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  donorBloodGroup: {
    type: String,
    required: true,
  },
  donorContactNumber: { type: String, required: true },
  donorGender: {
    type: String,
    required: true,
  },
  donorAge: { type: Number, required: true },

  patientName: { type: String, required: true },
  patientEmail: { type: String },
  patientContactNumber: { type: String, required: true },
  patientAge: { type: Number, required: true },
  patientBloodGroup: {
    type: String,
    enum: BloodGroup,
    required: true,
  },

  bagsNeeded: { type: Number, required: true },
  neededByDeadline: { type: Date, required: true },
  hospitalAddress: { type: String, required: true },
  hospitalName: { type: String, required: true },
  requesterGender: {
    type: String,
    enum: Genders,
    required: true,
  },
  status: {
    type: String,
    enum: Status,
    required: false,
    default: "pending",
  },
});

export const BloodRequest = model<TBloodRequest>(
  "BloodRequest",
  bloodRequestSchema
);
