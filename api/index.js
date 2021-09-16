import { app } from "./app";
import { port } from "../config/config";

// Index expone las rutas
app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
