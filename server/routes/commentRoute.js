import express from "express";
import {
  createComment,
  getAllComments,
} from "../controllers/commentController.js";

const commentRoutes = express.Router();

commentRoutes.post(
  "/add/:postId/:userId",

  createComment
);
commentRoutes.get(
  "/get/:postId",

  getAllComments
);

export default commentRoutes;
