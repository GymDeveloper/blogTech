//! Viene a ser nues local storage
const db = {
  users: [
    {
      id: "L3HS",
      name: "Linder",
      last_name: "Hassinger",
      email: "linder@gmail.com",
      password: "linder3",
    },
  ],
};

// Aqui vamos a poner las operaciones basicas del CRUD
//? CRUD => CREATE, READ, UPDATE, DELETE

//* Todo esto debe con async await
export const list = async (table) => {
  return await db[table];
};

export const store = async (table, data) => {
  //* CREO UN DATO Y RETORNO LA LISTA COMPLETA
  await db[table].push(data);
  return await list(table);
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
