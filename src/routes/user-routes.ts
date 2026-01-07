import { Router } from "express";
import { UserController } from "../controllers/user-controller.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/register", userController.register);
userRoutes.post("/login", userController.login);

export { userRoutes };
