import express from "express";
import userRouter from "./components/user";
import authRouter from "./components/auth";
import { port, base_url } from "../config/config";
import { checkToken } from "../auth";
import { Server as WebSocketServer } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

//* Cargando la carpeta public
app.use(express.static(__dirname + "/public"));

/*
 * connection => Es la palabra reservada la cual se encarga
 * de encender la conexion entre mi cliente y mi servidor
 * al momento de crear esta conexion le digo a mi servidor que
 * empiece a escuchar los eventos del cliente
 * socket => Es la informacion que viene de mi navegador web(client)
 */
io.on("connection", (socket) => {
  console.log(`new connection`);

  //* Como se que la conexion con mi cliente ya esta puede empezar a escuchar y a emitir eventos
  //* "hello:petter" es la palabra clave que me envia el cliente
  //* message es la informacion que recivo del cliente
  /**
   * params {string} : keyword
   * params {function} : Info from client
   */
  // * on => Es el encargado de recivir enventos
  socket.on("hello:petter", (message) => {
    console.log(`El doctor optopus ${message}`);

    //* Ahora quiero hacer que mi servidor emita un evento
    socket.emit(
      "bye:petter",
      "Un gran poder conlleva una gran responsabilidad"
    );

    socket.emit("new:comment", "Escribe un comentario");
  });
});

//? Esto sirve para poder leer el body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${base_url}/auth`, authRouter);
app.use(`${base_url}/user`, checkToken, userRouter);

server.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
