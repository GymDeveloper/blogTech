import bcrypt from "bcryptjs";

/**
 * Funcion para hashear mi passwprd
 * @param {string} password
 */
export const hash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};
