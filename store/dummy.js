// Viene a ser nues local storage
const db = {
  users: [
    {
      id: 1,
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
