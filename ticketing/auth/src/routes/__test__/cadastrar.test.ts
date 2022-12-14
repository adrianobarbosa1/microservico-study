import request from "supertest"
import { expect, it } from "vitest"
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

it("retorna 400 se email for inválido", async () => {
  return request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "testtest.com",
      senha: "senha",
    })
    .expect(400)
})

it("retorna 400 se senha for inválida", async () => {
  return request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "s",
    })
    .expect(400)
})

it("retorna 400 se senha ou email for inválido", async () => {
  await request(app).post("/api/usuarios/cadastrar").send({
    email: "test@test.com",
  })

  await request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      senha: "senha",
    })

    .expect(400)
})

it("retorna 400 se email estiver duplicado", async () => {
  await request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(201)

  await request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(400)
})

it("setar cookie depois de cadastrado com sucesso!", async () => {
  const response = await request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(201)

  expect(response.get("Set-Cookie")).toBeDefined()
})
