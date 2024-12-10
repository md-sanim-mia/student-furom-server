import { model, Schema } from "mongoose";
import { TBook } from "./book.interface";

const bookSchema= new Schema<TBook>({
    image:{type:String,required:true},
    book_name:{type:String,required:true},
    book_title:{type:String,required:true},
    writer_name:{type:String,required:true},
    drive_link:{type:String,required:false}
})

export const BookModel= model<TBook>('Book',bookSchema)