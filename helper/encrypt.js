import bcrypt from "bcryptjs";

/**
 * Funcion para hashear mi passwprd
 * @param {string} password
 */
export const hash = async (password) => {
  bcrypt.genSalt(10, (error, salt) => {
    if (error) return;

    bcrypt.hash(password, salt, (error, hash) => {
      if (error) return;

      return hash;
    });
  });
};
