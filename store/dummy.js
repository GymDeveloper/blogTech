import { Model } from "mongoose";

/**
 * Se encarga de lista en base al model
 * @param {Model} model
 * @returns {Array}
 */
// * recordemos que esto es una promesa
// * recuerden que cuando es una funcion inline el return esta implicito
export const list = async (model) => await model.find();

/**
 * Se encarga de guarda informacion
 * @param {Model} model
 * @param {Array<any>} data
 * @returns
 */
export const store = async (model, data) => {
  //* CREO UN DATO Y RETORNO LA LISTA COMPLETA
  // await db[table].push(data);
  // return await list(table);
  const object = new model(data);
  object.save();
};

// Porque esto puede por id o por cualquier paremetro
// esta la opciones de poner multiples parametros
// por default yo quiro el key = _id
export const findBy = async ({ model, key = "_id", value }) => {
  return await model.findOne({ [`${key}`]: value });
};

export const remove = async (table, id) => {
  const dataList = await list(table);

  //* primero debemos encontrar el indice
  const index = dataList.findIndex((data) => data.id === id);

  if (index === -1) {
    return false;
  }

  await db[table].splice(index, 1);

  return true;
};
