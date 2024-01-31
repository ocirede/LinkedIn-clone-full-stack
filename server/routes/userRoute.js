import express from "express";
import { } from "../Controllers/authController.js";
import { fetchLoggedUser, handleRegister, handleSignIn } from "../controllers/authController.js";
import auth from "../middlewares/userAuth.js";

const userRoutes = express.Router();

userRoutes.post("/register", handleRegister )
userRoutes.post("/signin",   handleSignIn );
userRoutes.get("/loggeduser", auth, fetchLoggedUser)

export default userRoutes;