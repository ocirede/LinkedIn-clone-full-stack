import express from "express";
import auth from "../middlewares/userAuth.js";
import {
  fetchLoggedUser,
  handleRegister,
  handleSignIn,
} from "../controllers/authControllers.js";

const userRoutes = express.Router();
userRoutes.post("/register", handleRegister);
userRoutes.post("/signin", handleSignIn);
userRoutes.get("/loggeduser", auth, fetchLoggedUser);
export default userRoutes;
