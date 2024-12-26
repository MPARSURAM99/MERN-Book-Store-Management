import { PORT, mongodbURI } from "../server/config.js";
import mongoose from "mongoose";
import express from "express";

export const app = express();

export const connectServer = () => {
  // Database connection.
  mongoose
    .connect(mongodbURI)
    .then(() => {
      console.log(`Database connected successfully.`);
      // Creating server.
      app.listen(PORT, () => {
        console.log(`Listening to the port: ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
