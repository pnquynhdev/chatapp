import express from "express";
import {
  signupController,
  loginController,
  logoutController,
} from "../controllers/auth.controllers.js";

const authRouters = express.Router();

authRouters.post("/signup", signupController);
authRouters.post("/login", loginController);
authRouters.post("/logout", logoutController);

export default authRouters;
