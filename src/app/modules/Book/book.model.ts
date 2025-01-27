import { model, Schema } from "mongoose";
import { TBook } from "./book.interface";

const bookSchema = new Schema<TBook>({
  category: { type: String, required: true },
  donate_by: { type: String, required: false },
  image: { type: String, required: true },
  book_name: { type: String, required: true },
  book_title: { type: String, required: true },
  writer_name: { type: String, required: true },
});

export const BookModel = model<TBook>("Book", bookSchema);
