import express from "express";
import { getComments } from "./controller";

const commentRouter = express.Router();

commentRouter.route("/").get(getComments);

export default commentRouter;
