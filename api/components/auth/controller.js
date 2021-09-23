import { sign } from "../../../auth";
import { store } from "../../../store/dummy";
import { response } from "../../../network";
import { hash } from "../../../helper/encrypt";
import userModel from "../user/model";

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
  // borramos el id porque mongodb ya lo pone

  const data = {
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    password: hash(user.password),
  };

  const users = await store(userModel, data);

  return response({ res, data: users, status: 201 });
};
