import express from "express";
import userRouter from "./components/user";
import authRouter from "./components/auth";
import commentRouter from "./components/comments";
import { save } from "./components/comments/controller";
import { base_url, db_url } from "../config/config";
import { checkToken } from "../auth";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import cors from "cors";
// import database
import connect from "../db";

// Se encargar cargar todas las dependencias, rutas, en si todo la aplicacion
export const app = express();
export const server = http.createServer(app);
export const io = new WebSocketServer(server);

// * connect recibe la url de conexion
connect(db_url);

//* Cargando la carpeta public
app.use(express.static(__dirname + "/public"));
app.use(cors());
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
  });

  //? Evento para guardar comentarios para
  // * Recibe el comentario desde el cliente y ademas lo guarda
  socket.on("new:comment", async (body) => {
    const res = await save(body);
    //* Una vez que se guardo el comentario le response al cliente que todo ok
    socket.emit("save:comment", res);
  });
});

//? Esto sirve para poder leer el body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${base_url}/auth`, authRouter);
app.use(`${base_url}/user`, checkToken, userRouter);
app.use(`${base_url}/comments`, commentRouter);
