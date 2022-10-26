import request from "supertest"
import { it } from "vitest"
import { app } from "../../app"

it("retorna 201 se tiver sucesso ao cadastrar", async () => {
  return request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(201)
})
