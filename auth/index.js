import jwt from "jsonwebtoken";
import { secret } from "../config/config";
import { response } from "../network";

// Existens 2 funciones principales en JWT
//? sign => Se encarga de generar el token
//? - recive 2 cosas,(payload, secret)
//? verify => Se encarga de validar el token
//? - recive 2 cosas,(token, secret)

//? payload no es mas que un data puede ser un JSON, TEXT, NUMBER
export const sign = (payload) => {
  //* General el token
  return jwt.sign(payload, secret);
};

const verify = (token) => {
  return jwt.verify(token, secret);
};

//? Ahora vamos crear funciones que se encarguen de
//? recibir y validar los token

//* getToken => Se ecangara de separ el token del header
//* checkToken => Se encarga de poder validar que el token recibido se valido

/**
 * @param {string} authorization
 * @param {Response} res
 */
const getToken = (authorization, res) => {
  if (authorization === null) {
    response({
      res,
      ok: false,
      status: 403,
      data: { message: "Token not found" },
    });
  }

  if (authorization.indexOf("Bearer") === -1) {
    response({
      res,
      ok: false,
      status: 403,
      data: { message: "Format token invalid" },
    });
  }

  //? Bearer <token>
  const token = authorization.split(" ")[1];
  //? [Bearer, token]
  return token;
};

/**
 * @param {*} req: Request
 * @param {*} res: Response
 * @param {*} next: Next
 */
export const checkToken = (req, res, next) => {
  //? Esto obtiene el valor de mi hader con el key authorization
  const authorization = req.headers.authorization || null;
  //? obtengo el token
  const token = getToken(authorization, res);
  //? nos toca validar el token
  const decoded = verify(token);

  //? Valido si el decoded tiene algun error
  if (!decoded) {
    response({
      res,
      ok: false,
      status: 403,
      data: { message: "Invalid Token" },
    });
  }

  //? Guardo el decoded dentro del request
  req.decoded = decoded;

  //? Todo esta ok puede seguir
  next();
};
