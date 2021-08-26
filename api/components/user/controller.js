/**
 * * Login => Email, Password => POST
 * * SignUp => Name, Lastname, Email, Password => POST
 * * ShowUser => ID => Show => GET
 * * Reset password => Email => POST
 * * Update User => Id, UserData => PUT
 * * Delete user => Id => DELETE
 */
import { response } from "../../../network";
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
