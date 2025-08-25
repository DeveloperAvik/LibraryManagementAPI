import { Book } from "./book.model";
import { IBook } from "./book.interface";

export class BookService {
  static async create(data: IBook) {
    return await Book.create(data);
  }

  static async getAll() {
    return await Book.find();
  }

  static async getById(id: string) {
    return await Book.findById(id);
  }

  static async getByIsbn(isbn: string) {
    return await Book.findOne({ isbn });
  }

  static async findByGenre(genre: string) {
    return await Book.find({ genre });
  }

  static async update(id: string, data: Partial<IBook>) {
    return await Book.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await Book.findByIdAndDelete(id);
  }
}
