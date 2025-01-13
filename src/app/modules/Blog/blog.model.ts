import { model, Schema } from "mongoose";
import { Tblog } from "./blog.interface";

const blogSchema = new Schema<Tblog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    email: { type: String, required: true },
    author: { type: String, required: true },
    authorImg: { type: String, required: true },
    contentImg: { type: String, required: true },
    date: { type: Date, require: true, default: new Date() },
  },
  {
    timestamps: true,
  }
);

export const blogModel = model<Tblog>("Blog", blogSchema);
