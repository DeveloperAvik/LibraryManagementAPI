import { Router } from "express";
import { BorrowController } from "./borrow.controller";

const router = Router();

router.post("/", BorrowController.borrowBook);
router.get("/", BorrowController.borrowSummary);

export default router;
