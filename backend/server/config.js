import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const mongodbURI = process.env.DB_URI;
