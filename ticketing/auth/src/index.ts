import express from "express"
import { json } from "body-parser"
import "express-async-errors"
import { conectarRouter } from "./routes/conectar"
import { cadastrarRouter } from "./routes/cadastrar"
import { errorHandler } from "./middlewares/errorHandler"
import { NotFoundError } from "./errors/notFoundError"

const app = express()
app.use(json())

app.use(cadastrarRouter)

app.all("*", async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Listening on port 3000!")
})
