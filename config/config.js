//? Este config se encagargara de exportar mis variables
export const base_url = "/api/v1";

export const port = process.env.PORT || 8080;

export const secret = process.env.SECRET || "secret";

const mongo_local = "mongodb://192.168.1.4:27017/local";
const mongo_remote =
  "mongodb+srv://root:6ixiU2NTTdQUOoY4@cluster0.wns0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export const db_url = process.env.DB_URL || mongo_local;
