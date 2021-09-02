import express from "express";
import { login, signUp, show, update, destroy, showAll } from "./controller";

const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/signUp").post(signUp);
userRouter.route("/show/:id").get(show);
userRouter.route("/update/:id").put(update);
userRouter.route("/destroy/:id").delete(destroy);
userRouter.route("/users").get(showAll);

//? Usamos export default cuando solamente hay una cosa que exportar
export default userRouter;
