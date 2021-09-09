// Invoke a io
/*
 * io() => Enciende la conexion para que mi client
 * pueda emitar y recibir eventos
 */

const server = io();

// * Cliente quiero que emitas un mensaje con el keyword
// * "hello:petter" para que mi servidor pueda reconcer este evento
//? emit => Es el encargado de poder enviar eventos
server.emit("hello:petter", "Spiderman no way home");

//? on => Es el encargado de poder recibir eventos
server.on("bye:petter", (message) => {
  console.log(message);
});

server.on("new:comment", (message) => {
  console.log(`Message from server: ${message}`);
});
