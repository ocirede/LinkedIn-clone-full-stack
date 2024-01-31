import { port } from "./lib/env.vars.js";
import express from "express";
import connectDB from "./lib/connectDB.js";
import "dotenv/config";
import userRoutes from "./routes/userRoute.js";
import postRoutes from "./routes/postRoute.js";
import cors from "cors";
import commentRoutes from "./routes/commentRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/posts", express.static("uploads/post-image"), postRoutes);
app.use("/comments", commentRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  connectDB();
});
