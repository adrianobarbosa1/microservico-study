import request from "supertest"
import { expect, it } from "vitest"
import { app } from "../../app"

it("retorna 400 se email for inválido", async () => {
  return request(app)
    .post("/api/usuarios/conectar")
    .send({
      email: "testtest.com",
      senha: "senha",
    })
    .expect(400)
})

it("retorna 400 se senha for inválida", async () => {
  return request(app)
    .post("/api/usuarios/conectar")
    .send({
      email: "test@test.com",
      senha: "s",
    })
    .expect(400)
})

it("retorna 400 se senha ou email for inválido", async () => {
  await request(app).post("/api/usuarios/conectar").send({
    email: "test@test.com",
  })

  await request(app)
    .post("/api/usuarios/conectar")
    .send({
      senha: "senha",
    })

    .expect(400)
})

it("retorna 400 se email fornecido não existir", async () => {
  return request(app)
    .post("/api/usuarios/conectar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(400)
})

it("retorna 400 quando senha for incorreto", async () => {
  await request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(201)

  await request(app)
    .post("/api/usuarios/conectar")
    .send({
      email: "test@test.com",
      senha: "senha123",
    })
    .expect(400)
})

it("retorna 200 se cookie for definido", async () => {
  await request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(201)

  const response = await request(app)
    .post("/api/usuarios/conectar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(200)

  expect(response.get("Set-Cookie")).toBeDefined()
})
