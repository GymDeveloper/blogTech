import mongoose from "mongoose";

//* tenemos que hacer que mongoose sea scope global
mongoose.Promise = global.Promise;

//* ahora debo crear una funcion la cual se encargue
//* de conectar a mi base de datos
//! como parametro tengo que recibir la URL

/**
 * Funcion para conectar a la base de datos
 * @param {string} url
 */
const connect = async (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
  });

  console.log("[db] connected");
};

export default connect;
