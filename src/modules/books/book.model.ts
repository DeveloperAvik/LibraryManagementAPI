import mongoose, { Schema, Document } from "mongoose";
import { IBook } from "./book.interface";

export interface IBookModel extends IBook, Document { }

const bookSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    isbn: { type: String, unique: true, required: true },
    description: { type: String },
    copies: { type: Number, default: 1 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Book = mongoose.model<IBookModel>("Book", bookSchema);
