/**
 * * Login => Email, Password => POST
 * * SignUp => Name, Lastname, Email, Password => POST
 * * ShowUser => ID => Show => GET
 * * Reset password => Email => POST
 * * Update User => Id, UserData => PUT
 * * Delete user => Id => DELETE
 */
import { response } from "../../../network";
import { list, findBy, upsert, remove } from "../../../store/dummy";
// paso 1 importar el modelo
import userModel from "./model";

export const show = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  // recordemos que find recibe 3 cosas
  // * 1 modelo
  // * 2 key = _id
  // * 3 value
  // ? como puedo hacer para que el orden de los parametros no importe?
  //? deberimoas pasarle un objeto usando destructuracion
  const user = await findBy({ value: id, model: userModel });

  if (!user) {
    return response({
      ok: false,
      status: 500,
      res,
      data: "error data not found",
    });
  }

  return response({ res, data: user });
};

export const update = async (req, res) => {
  const { id } = req.params;

  // ademas del id usamos el bomodeldy que contiene los datos a cambiar
  const users = await upsert({ model: userModel, id, data: req.body });

  if (!users) {
    return response({
      ok: false,
      status: 500,
      res,
      data: "error data not found",
    });
  }

  return response({
    res,
    data: users,
  });
};

export const destroy = async (req, res) => {
  const { id } = req.params;

  const users = await remove(userModel, id);

  if (!users) {
    return response({
      res,
      status: 500,
      ok: false,
      data: { error: "User not found" },
    });
  }

  return response({ res, data: users });
};

//* LISTA USUARIOS
//* Aca traigo la lista de usuarios
// const users = await list(userModel);
export const showAll = async (req, res) => {
  try {
    const users = await list(userModel);

    return response({
      res,
      data: users,
    });
  } catch (error) {
    return response({
      res,
      status: 500,
      ok: false,
      data: error.message,
    });
  }
};
