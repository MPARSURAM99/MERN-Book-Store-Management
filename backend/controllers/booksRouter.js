import express from "express";
import { avlBooks } from "../models/bookModel.js";

const router = express.Router();

// Create books collection.
router.post("/", async (req, resp) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return resp.send({
        message: "send all required fields: title, author, publishYear.",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await avlBooks.create(newBook);

    resp.send(book);
  } catch (error) {
    console.log(error.message);
    resp.send({ message: error.message });
  }
});

// Rout for get all books from database.
router.get("/", async (req, resp) => {
  try {
    const books = await avlBooks.find({});
    return resp.json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    resp.send({ message: error.message });
  }
});

// Rout for get one books from database by ID.
router.get("/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const book = await avlBooks.findById(id);
    return resp.json({ book });
  } catch (error) {
    console.log(error.message);
    resp.send({ message: error.message });
  }
});

// Rout for update a book.
router.put("/:id", async (req, resp) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return resp.send({
        message: "send all required fields: title, author, publishYear.",
      });
    }

    const { id } = req.params;

    const updatedBook = await avlBooks.findByIdAndUpdate(id, req.body);

    if (!updatedBook) {
      return resp.json({ message: "Book not found." });
    } else {
      return resp.send({ message: "Book updated successfully" });
    }
  } catch (error) {
    console.log(error.message);
    resp.send({ message: error.message });
  }
});

// Rout for deleting a book from database by id.
router.delete("/books/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const deletBook = await avlBooks.findByIdAndDelete(id);
    if (!deletBook) {
      return resp.json({ message: "Book not found" });
    } else {
      return resp.send({ message: "Book deleted successfully." });
    }
  } catch (error) {
    console.log(error.message);
    resp.send({ message: error.message });
  }
});

export default router;
