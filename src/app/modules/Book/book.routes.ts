import expess from "express";
import { bookContrller } from "./book.controller";
const router = expess.Router();

router.post("/create-book", bookContrller.createBook);
router.get("/getAll-book", bookContrller.getAllBook);
router.get("/getSingleBook/:id", bookContrller.getSingleBook);
router.delete("/delete-book/:id", bookContrller.deleteBook);
router.put("/book-update/:id", bookContrller.updateBook);
export const bookRouters = router;
