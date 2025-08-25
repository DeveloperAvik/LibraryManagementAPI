import { Document, Model, Types } from "mongoose";

export interface IBorrow extends Document {
  book: Types.ObjectId;
  quantity: number;
  dueDate: Date;
}

export interface IBorrowModel extends Model<IBorrow> {
  borrowBook(bookId: string, quantity: number): Promise<void>;
}
