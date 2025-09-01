import { Router } from "express";
import bookRoutes from "../books/book.route";
import borrowRoutes from "../borrow/borrow.route";

const router = Router();

router.use("/books", bookRoutes);
router.use("/borrow", borrowRoutes);

export default router;
