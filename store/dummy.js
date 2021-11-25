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
  try {
    const object = new model(data);
    object.save();

    return object;
  } catch (err) {
    return err;
  }
};

// Porque esto puede por id o por cualquier paremetro
// esta la opciones de poner multiples parametros
// por default yo quiro el key = _id
// la destructuracion es recomendable cuando tengamos mas de 2 parametros
export const findBy = async ({ model, key = "_id", value }) => {
  try {
    const object = await model.findOne({ [`${key}`]: value });
    console.log("object", object);
    return object;
  } catch (err) {
    console.log("err", err.message);
    return err.message;
  }
};

/**
 * Funcion para actualizar
 * @param {{model: Model, id: string, data: Object}} parametros
 * @returns {Array?}
 */
export const upsert = async ({ model, id, data }) => {
  try {
    // data es un objeto que tiene las columnas del modelo
    await model.findByIdAndUpdate(id, data);
    return await list(model);
  } catch (err) {
    return false;
  }
};

/**
 *
 * @param {Model} model
 * @param {String} id
 */
export const remove = async (model, id) => {
  try {
    await model.findByIdAndRemove(id);
    // para que retorne hacemos que retorne la lista del modelo
    return await list(model);
  } catch (err) {
    return false;
  }
};
