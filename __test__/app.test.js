import request from "supertest";
import { app } from "../api/app";

// Primer test voy a listar a los usuarios
describe("Lista de usuarios", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get("/api/v1/user/users")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlcGl0b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6InBlcGl0bzEyMzQ1NiIsImlhdCI6MTYzMDU5NTkxNH0.O9Xz7lgpXHmCf2VP0H3v0WonpdABmdxvEJm2q8hixtQ"
      );

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});
