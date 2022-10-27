import request from "supertest"
import { expect, it } from "vitest"
import { app } from "../../app"

it("retorna 200 limpar cookie após desconectar", async () => {
  await request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(201)

  const response = await request(app)
    .post("/api/usuarios/desconectar")
    .send({})
    .expect(200)

  expect(response.get("Set-Cookie")[0]).toEqual(
    "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  )
})
