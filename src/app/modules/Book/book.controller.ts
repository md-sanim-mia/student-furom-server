import { bookServices } from "./book.services";
import { asyncCatch } from "../../utility/async.catch";

const createBook = asyncCatch(async (req, res) => {
  const bookData = req.body;
  const result = await bookServices.createBookIntoDB(bookData);
  res.status(200).json({
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBook = asyncCatch(async (req, res) => {
  let search: string = "";
  if (req.query.q) {
    search = String(req.query.q);
  }
  const result = await bookServices.getAllBookFromDB(search as string);
  res.status(200).json({
    success: true,
    message: "Get All Book successfully",
    data: result,
  });
});

const getSingleBook = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await bookServices.getSingleBookFromDB(id);
  res.status(200).json({
    success: true,
    message: "Get single book successfully",
    data: result,
  });
});
const deleteBook = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const result = await bookServices.deleteBookFromDB(id);
  res.status(200).json({
    success: true,
    message: "Delete Book successfully",
    data: result,
  });
});

const updateBook = asyncCatch(async (req, res) => {
  console.log("update");
  const id = req.params.id;
  const updateDoc = req.body;
  const result = await bookServices.updateBookFromDB(id, updateDoc);
  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});
export const bookContrller = {
  createBook,
  getAllBook,
  deleteBook,
  updateBook,
  getSingleBook,
};
