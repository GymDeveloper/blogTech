//? Este config se encagargara de exportar mis variables
export const base_url = "/api/v1";

export const port = process.env.PORT || 8080;

export const secret = process.env.SECRET || "secret";

export const db_url =
  process.env.DB_URL ||
  "mongodb+srv://root:6ixiU2NTTdQUOoY4@cluster0.wns0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
