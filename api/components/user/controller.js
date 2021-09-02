/**
 * * Login => Email, Password => POST
 * * SignUp => Name, Lastname, Email, Password => POST
 * * ShowUser => ID => Show => GET
 * * Reset password => Email => POST
 * * Update User => Id, UserData => PUT
 * * Delete user => Id => DELETE
 */
import { response } from "../../../network";
import { list, find, remove } from "../../../store/dummy";

//*POST
const USER_TABLE = "users";

export const show = async (req, res) => {
  const { id } = req.params;

  const user = await find(USER_TABLE, id);
  return response({ res, data: user });
};

export const update = (req, res) => {
  const { id } = req.params;

  return response({
    res,
    data: { id },
  });
};

export const destroy = async (req, res) => {
  const { id } = req.params;

  const user = await remove(USER_TABLE, id);

  if (!user) {
    return response({ res, ok: false, data: { error: "User not found" } });
  }

  return response({ res, data: { success: "User deleted successfully!" } });
};

//* LISTA USUARIOS
export const showAll = async (req, res) => {
  //* Aca traigo la lista de usuarios
  const users = await list(USER_TABLE);

  return response({ res, data: users });
};
