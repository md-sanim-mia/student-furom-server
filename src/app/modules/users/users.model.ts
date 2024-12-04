import { model, Schema } from "mongoose";
import { BloodGroup } from "./users.const";

const usersSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  bloodGroup: { type: String, required: true, enum: BloodGroup },
  department: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  session: { type: String, required: true },
  role: { type: String, default: "user", required: false },
  year: { type: String, required: true },
  status: {
    type: String,
    enum: ["in-progress", "block"],
    default: "in-progress",
    required: false,
  },
  designation: { type: String, required: false },
});

export const Users = model<TUser>("users", usersSchema);
