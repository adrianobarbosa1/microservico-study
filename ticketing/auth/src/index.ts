import express from "express"
import { json } from "body-parser"

import { conectarRouter } from "./routes/conectar"

const app = express()
app.use(json())

app.listen(3000, () => {
  console.log("Listening on port 3000!")
})
