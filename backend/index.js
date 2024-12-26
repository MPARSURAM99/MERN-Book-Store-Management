import express from "express";
import bookRouter from "./controllers/booksRouter.js";
import { app, connectServer } from "./server/connection.js";
import cors from "cors";

// Middleware for parsing request body;
app.use(express.json());

// Middleware for handling CORS POLICY;
// Option 1: Allow all origins with default of cors(*);
app.use(cors());
// Option 2: Allow custom origins;
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     method: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, resp) => {
  return resp.send("Wellcom to book store management project");
});

app.use("/books", bookRouter);

connectServer();
