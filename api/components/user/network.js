import express from "express";
import { login, signUp } from "./controller";

const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/signUp").post(signUp);

//? Usamos export default cuando solamente hay una cosa que exportar
export default userRouter;
