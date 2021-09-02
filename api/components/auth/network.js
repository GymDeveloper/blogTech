import express from "express";
import { login, signUp } from "./controller";

const authRouter = express.Router();

// ----------------------------------------------------------------
authRouter.route("/login").post(login);
authRouter.route("/signUp").post(signUp);
// ----------------------------------------------------------------

export default authRouter;
