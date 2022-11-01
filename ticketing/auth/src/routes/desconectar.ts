import express from "express"

const router = express.Router()

router.post("/api/usuarios/desconectar", (req, res) => {
  req.session = null
  res.send({})
})

export { router as desconectarRouter }
