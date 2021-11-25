import { sign } from "../../../auth";
import { store, findBy } from "../../../store/dummy";
import { response } from "../../../network";
import { hash, compare } from "../../../helper/encrypt";
import userModel from "../user/model";

export const login = async (req, res) => {
  console.log("login llegos");
  try {
    // ?Destructuracion
    const user = req.body;

    //? Este payload se envia a sign para ser parte de la creacion del token
    const payload = {
      email: user.email,
      password: user.password,
    };

    const token = sign(payload);

    console.log("email", user.email);

    //? primer debo buscar a mi usario
    const userData = await userModel.findOne({ email: user.email });
    console.log("userData", userData);
    //? luego debo ver si existe
    // if (!userData) return;
    //? luego comparo la contraseña
    const validate = compare(user.password, userData.password);

    if (!validate) {
      return response({
        res,
        ok: false,
        status: 500,
        data: {
          message: "User invalid",
        },
      });
    }

    return response({
      res,
      data: {
        userData,
        token,
      },
    });
  } catch (error) {
    return response({
      res,
      data: error.message,
      status: 500,
      ok: false,
    });
  }
};

export const signUp = async (req, res) => {
  try {
    const user = req.body;

    //* Creamos el data del usuario nuevo
    // borramos el id porque mongodb ya lo pone

    const data = {
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      password: hash(user.password),
    };

    const userData = await store(userModel, data);

    return response({ res, data: userData, status: 201 });
  } catch (error) {
    return response({
      res,
      data: error.message,
      status: 500,
      ok: false,
    });
  }
};
