import express from "express";
import { greet, greetApi } from "./controller";

const router = express.Router();

router.get("/", greet);
router.route("/api").get(greetApi);

//? Usamos export default cuando solamente hay una cosa que exportar
export default router;
