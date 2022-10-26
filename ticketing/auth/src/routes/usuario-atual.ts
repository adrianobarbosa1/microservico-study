import express from "express"
import jwt from "jsonwebtoken"

const router = express.Router()

router.get("/api/usuarios/usuarioatual", (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ usuarioAtual: null })
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!)
    res.send({ usuarioAtual: payload })
  } catch (err) {
    res.send({ usuarioAtual: null })
  }
})

export { router as usuarioAtualRouter }
