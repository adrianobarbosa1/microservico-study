import express from "express"

const router = express.Router()

router.get("/api/uruarios/usuarioAtual", (req, res) => {
  res.send("hi there")
})

export { router as usuarioAtualRouter }
