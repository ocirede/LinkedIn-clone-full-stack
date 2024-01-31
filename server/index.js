import { port } from "./lib/env.vars.js";
import express from "express";
import connectDB from "./lib/connectDB.js";
import "dotenv/config";
import userRoutes from "./routes/userRoute.js";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", express.static("uploads/profile-image"));
app.use("/posts", express.static("uploads/post-image"));

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  connectDB();
});
