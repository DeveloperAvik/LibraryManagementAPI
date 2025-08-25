import { Request, Response } from "express";
import { BookService } from "./book.service";

export class BookController {
  static async create(req: Request, res: Response) {
    try {
      const book = await BookService.create(req.body);
      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: book,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const books = await BookService.getAll();
      res.json({ success: true, message: "Books fetched", data: books });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const book = await BookService.getById(req.params.id);
      if (!book) {
        return res.status(404).json({ success: false, message: "Book not found" });
      }
      res.json({ success: true, message: "Book fetched", data: book });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  static async getByIsbn(req: Request, res: Response) {
    try {
      const book = await BookService.getByIsbn(req.params.isbn);
      if (!book) {
        return res.status(404).json({ success: false, message: "Book not found" });
      }
      res.json({ success: true, message: "Book fetched", data: book });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  static async findByGenre(req: Request, res: Response) {
    try {
      const books = await BookService.findByGenre(req.params.genre);
      res.json({ success: true, message: "Books fetched", data: books });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const book = await BookService.update(req.params.id, req.body);
      if (!book) {
        return res.status(404).json({ success: false, message: "Book not found" });
      }
      res.json({ success: true, message: "Book updated", data: book });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const book = await BookService.delete(req.params.id);
      if (!book) {
        return res.status(404).json({ success: false, message: "Book not found" });
      }
      res.json({ success: true, message: "Book deleted" });
    } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
}
