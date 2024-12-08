import { model, Schema } from "mongoose";
import { BloodGroup } from "./users.const";
import bcrypt from "bcrypt";
const usersSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
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
    facebook: { type: String, default: "", required: false },
    linkedIn: { type: String, default: "", required: false },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  },
  { timestamps: true }
);

usersSchema.pre("save", async function (next) {
  const password = this.password;
  if (!password) {
    throw new Error("password is requried");
  }
  const bcryptPassword = await bcrypt.hash(this.password, 10);
  if (!password) {
    throw new Error(" bcrypt solt generate problem ");
  }
  this.password = bcryptPassword;
});
export const Users = model<TUser>("users", usersSchema);
