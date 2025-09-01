import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();

router.post("/", BookController.create);
router.get("/:id", BookController.getById);
router.get("/isbn/:isbn", BookController.getByIsbn);
router.get("/genre/:genre", BookController.findByGenre);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);
router.get("/", BookController.getAll);

export default router;
