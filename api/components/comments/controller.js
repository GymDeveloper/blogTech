import { store, list } from "../../../store/dummy";
import { nanoid } from "nanoid";
import { response } from "../../../network";

export const getComments = async (req, res) => {
  const comments = await list("comments");

  response({ res, data: comments });
};

export const save = async (body) => {
  //? Tengo que modificar para agregarle un ID
  body.id = nanoid();

  await store("comments", body);

  return {
    ok: true,
    message: body,
  };
};
