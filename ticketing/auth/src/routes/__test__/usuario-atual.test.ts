import request from "supertest"
import { expect, it } from "vitest"
import { app } from "../../app"

it("retorna detalhes sobre usuario atual", async () => {
  const authRes = await request(app)
    .post("/api/usuarios/cadastrar")
    .send({
      email: "test@test.com",
      senha: "senha",
    })
    .expect(201)

  const cookie = authRes.get("Set-Cookie")

  const response = await request(app)
    .get("/api/usuarios/usuarioatual")
    .set("Cookie", cookie)
    .send()
    .expect(200)

  expect(response.body.usuarioAtual.email).toEqual("test@test.com")
})

it("retorna null se não tiver conectado", async () => {
  const response = await request(app)
    .get("/api/usuarios/usuarioatual")
    .send()
    .expect(200)

  expect(response.body.usuarioAtual).toEqual(null)
})
