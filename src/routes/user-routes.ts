import { Router } from "express";
import { UserController } from "../controllers/user-controller.js";
import { ensureAuthenticated } from "../middlewares/ensure-authenticated.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/register", userController.register);
userRoutes.post("/login", userController.login);
userRoutes.post("/logout", ensureAuthenticated, userController.logout);

userRoutes.get("/me", ensureAuthenticated, userController.userInfo);

export { userRoutes };
