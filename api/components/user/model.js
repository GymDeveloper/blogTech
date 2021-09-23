// este modelo sera el del usuario el cual contenga la estructura de datos
// paso 1 importar mongoose
import mongoose from "mongoose";
// paso 2 definir los datos
// Entendemos el usuario tiene
/**
 * id, name, last_name, email. password
 */
//* ojo por default mongo le pone un _id ******
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
