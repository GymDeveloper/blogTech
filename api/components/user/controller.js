/**
 * * Login => Email, Password => POST
 * * SignUp => Name, Lastname, Email, Password => POST
 * * ShowUser => ID => Show => GET
 * * Reset password => Email => POST
 * * Update User => Id, UserData => PUT
 * * Delete user => Id => DELETE
 */
import { response } from "../../../network";
import { list } from "../../../store/dummy";
//*POST
export const login = (req, res) => {
  // ?Destructuracion
  const { email, password } = req.body;

  return response({
    res,
    data: { email, password },
  });
};

export const signUp = (req, res) => {
  const { name, last_name, email, password } = req.body;

  return response({
    res,
    data: { name, last_name, email, password },
  });
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
