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

// Capturar los texto de mis inputs
//* Primero capture mi formulario que tiene la clase form-comment
const form = document.querySelector(".form-comment");

//? Cuando detectectes el evento submit de este form haz lo siguiente
form.addEventListener("submit", function (e) {
  //? Evitar que recargue la pagina
  e.preventDefault();

  const comment = e.target[0].value;
  const author = e.target[1].value;
  const body = { comment, author };

  //* Envia el evento al servidor para que este guarde mensaje
  server.emit("new:comment", body);

  //* Esta a la espera de una respuesta
  server.on("save:comment", (message) => {
    console.log(message);
  });

  e.target[0].value = "";
  e.target[1].value = "";

  // ?Quiero guarda estos datos en un array en mi servidor
});
