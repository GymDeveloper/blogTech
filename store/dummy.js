//* Todo esto debe con async await
export const list = async (table) => {
  return await db[table];
};

/**
 * Se encarga de guarda informacion
 * @param {any} model
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

export const find = async (table, id) => {
  //? Primero obtengo la lista de datos
  const dataList = await list(table);

  //? Buscar por id
  return dataList.find((data) => data.id === id);
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
