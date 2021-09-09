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
    {
      id: "POO",
      name: "Juanito",
      last_name: "Zapata",
      email: "juan@gmail.com",
      password: "linder3",
    },
  ],
  stories: [
    {
      id: "h1oo",
      title: "Historia 1",
      content: "lorem midamdklmasldkasmlkasdm",
      user_id: "L3HS",
    },
    {
      id: "h2oo",
      title: "Historia 2",
      content: "lorem midamdklmasldkasmlkasdm",
      user_id: "L3HS",
    },
  ],
  comments: [
    {
      id: "ldkmslkadm",
      comment: "Un gran poder conlleva una gran responsabilidad",
      author: "Petter Parker",
    },
  ],
};

// Aqui vamos a poner las operaciones basicas del CRUD
//? CRUD => CREATE, READ, UPDATE, DELETE

//* Todo esto debe con async await
export const list = async (table) => {
  return await db[table];
};

/**
 * Se encarga de guarda informacion
 * @param {string} table
 * @param {Array<any>} data
 * @returns
 */
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
