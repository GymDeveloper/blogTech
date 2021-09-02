import express from "express";
import userRouter from "./components/user";
import authRouter from "./components/auth";
import { port, base_url } from "../config/config";
import { checkToken } from "../auth";

const app = express();

//? Esto sirve para poder leer el body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${base_url}/auth`, authRouter);
app.use(`${base_url}/user`, checkToken, userRouter);

app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
