import express from "express"
import "express-async-errors"
import cookieSession from "cookie-session"

import { NotFoundError } from "./errors/not-found-error"
import { errorHandler } from "./middlewares/error-handler"
import { cadastrarRouter } from "./routes/cadastrar"
import { conectarRouter } from "./routes/conectar"
import { desconectarRouter } from "./routes/desconectar"
import { usuarioAtualRouter } from "./routes/usuario-atual"

const app = express()
app.set("trust proxy", true)
app.use(express.json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
)

app.use(cadastrarRouter)
app.use(conectarRouter)
app.use(desconectarRouter)
app.use(usuarioAtualRouter)

app.all("*", async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
