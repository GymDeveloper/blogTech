import express from "express";
import router from "./router";

const app = express();

app.use(router);

app.listen(8080);
