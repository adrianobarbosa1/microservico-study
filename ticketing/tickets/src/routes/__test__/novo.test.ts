import request from "supertest"
import { expect, it } from "vitest"
import { app } from "../../app"

it("ter um manipulador de rotas ouvindo para /api/tickets solicitação de postagem", async () => {
  const response = await request(app).post("/api/tickets").send({})

  expect(response.status).not.toEqual(404)
})
it("somente acesso se estiver logado", async () => {
  const response = await request(app).post("/api/tickets").send({})

  expect(response.status).toEqual(401)
})
it("retorna error se um titulo invalido for fornecido", async () => {})
it("retorna error se um preço invalido for fornecido", async () => {})
