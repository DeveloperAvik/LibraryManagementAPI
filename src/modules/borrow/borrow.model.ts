import mongoose, { Schema } from "mongoose";
import { IBorrow, IBorrowModel } from "./borrow.interface";
import { Book } from "../books/book.model";

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

borrowSchema.statics.borrowBook = async function (bookId: string, quantity: number) {
  const book = await Book.findById(bookId);
  if (!book) throw new Error("Book not found");

  if (book.copies < quantity) throw new Error("Not enough copies available");

  book.copies -= quantity;
  if (book.copies === 0) book.available = false;

  await book.save();
};

export const Borrow = mongoose.model<IBorrow, IBorrowModel>("Borrow", borrowSchema);
