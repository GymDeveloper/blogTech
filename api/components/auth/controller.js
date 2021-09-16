import { nanoid } from "nanoid";
import { sign } from "../../../auth";
import { store } from "../../../store/dummy";
import { response } from "../../../network";

const USER_TABLE = "users";

export const login = (req, res) => {
  // ?Destructuracion
  const user = req.body;

  //? Este payload se envia a sign para ser parte de la creacion del token
  const payload = {
    email: user.email,
    password: user.password,
  };

  const token = sign(payload);

  return response({
    res,
    data: {
      user,
      token,
    },
  });
};

export const signUp = async (req, res) => {
  const user = req.body;

  //* Creamos el data del usuario nuevo
  const data = {
    id: nanoid(),
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
  };

  const users = await store(USER_TABLE, data);

  return response({ res, data: users, status: 201 });
};
