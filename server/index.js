import { port } from "./lib/env.vars.js";
import express from "express";
import connectDB from "./lib/connectDB.js";
import "dotenv/config";
import userRoutes from "./routes/userRoute.js";
import postRoutes from "./routes/postRoute.js";
import cors from "cors";
import fs from "fs";
import commentRoutes from "./routes/commentRoute.js";

const uploads = "./uploads";
if (!fs.existsSync(uploads)) {
  fs.mkdirSync(uploads);
}
const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/users", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
