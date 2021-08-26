import express from "express";
import userRouter from "./components/user";

const app = express();

//? Esto sirve para poder leer el body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", userRouter);

app.listen(8080);
