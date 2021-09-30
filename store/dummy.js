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

export const find = async (model, key, value) => {
  //? Primero obtengo la lista de datos
  // const dataList = await list(table);
  //? Buscar por id
  // return dataList.find((data) => data.id === id);
  const data = model.findOne({ key: value });
  return data;
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
