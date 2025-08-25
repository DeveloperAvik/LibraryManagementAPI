import { Request, Response } from "express";
import { Borrow } from "./borrow.model";

export class BorrowController {
  static async borrowBook(req: Request, res: Response) {
    try {
      const { book, quantity, dueDate } = req.body;

      await Borrow.borrowBook(book, quantity);

      const borrow = await Borrow.create({ book, quantity, dueDate });

      res.status(201).json({
        success: true,
        message: "Book borrowed successfully",
        data: borrow,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message || "Failed to borrow book",
      });
    }
  }

  // Borrowed books summary (Aggregation)
  static async borrowSummary(req: Request, res: Response) {
    try {
      const summary = await Borrow.aggregate([
        {
          $group: {
            _id: "$book",
            totalQuantity: { $sum: "$quantity" },
          },
        },
        {
          $lookup: {
            from: "books",          
            localField: "_id",
            foreignField: "_id",
            as: "bookDetails",
          },
        },
        { $unwind: "$bookDetails" },
        {
          $project: {
            _id: 0,
            book: {
              title: "$bookDetails.title",
              isbn: "$bookDetails.isbn",
            },
            totalQuantity: 1,
          },
        },
        { $sort: { totalQuantity: -1 } }, // optional: sort by most borrowed
      ]);

      res.json({
        success: true,
        message: "Borrowed books summary retrieved successfully",
        data: summary,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

}
