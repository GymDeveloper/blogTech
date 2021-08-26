import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hola mundo",
  });
});

app.listen(8080);
