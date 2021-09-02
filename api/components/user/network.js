import express from "express";
import { login, signUp, show, update, destroy } from "./controller";

const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/signUp").post(signUp);
userRouter.route("/show/:id").get(show);
userRouter.route("/update/:id").put(update);
userRouter.route("/destroy/:id").delete(destroy);

//? Usamos export default cuando solamente hay una cosa que exportar
export default userRouter;
