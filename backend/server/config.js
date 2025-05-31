import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const mongodbURI = process.env.MONGODB_URI;
