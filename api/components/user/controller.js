/**
 * * Login => Email, Password => POST
 * * SignUp => Name, Lastname, Email, Password => POST
 * * ShowUser => ID => Show => GET
 * * Reset password => Email => POST
 * * Update User => Id, UserData => PUT
 * * Delete user => Id => DELETE
 */
import { response } from "../../../network";
import { list, store } from "../../../store/dummy";
import { nanoid } from "nanoid";
//*POST
export const login = (req, res) => {
  // ?Destructuracion
  const { email, password } = req.body;

  return response({
    res,
    data: { email, password },
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

  const users = await store("users", data);

  return response({ res, data: users });
};

export const show = (req, res) => {
  const { id } = req.params;

  return response({
    res,
    data: { id },
  });
};

export const update = (req, res) => {
  const { id } = req.params;

  return response({
    res,
    data: { id },
  });
};

export const destroy = (req, res) => {
  const { id } = req.params;

  return response({
    res,
    data: { id },
  });
};

//* LISTA USUARIOS
export const showAll = async (req, res) => {
  //* Aca traigo la lista de usuarios
  const users = await list("users");

  return response({ res, data: users });
};
