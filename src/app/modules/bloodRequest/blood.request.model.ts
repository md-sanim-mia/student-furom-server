import { model, Schema } from "mongoose";
import { TBloodRequest } from "./blood.request.interface";
import { BloodGroup, Genders, Status } from "./blood.request.constant";
import { string } from "zod";

const bloodRequestSchema = new Schema<TBloodRequest>(
  {
    patientName: { type: String, required: true },
    patientEmail: { type: String },
    patientContactNumber: { type: String, required: true },
    patientAge: { type: String, required: true },
    patientBloodGroup: {
      type: String,
      enum: BloodGroup,
      required: true,
    },

    bagsNeeded: { type: String, required: true },
    neededByDeadline: { type: String, required: true },
    hospitalAddress: { type: String, required: true },
    hospitalName: { type: String, required: false },

    gender: {
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
  },
  { timestamps: true }
);

export const BloodRequest = model<TBloodRequest>(
  "BloodRequest",
  bloodRequestSchema
);
