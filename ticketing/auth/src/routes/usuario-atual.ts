import express from "express"
import { requerAutenticacao, usuarioAtual } from "@adrtickets/commom"

const router = express.Router()

router.get("/api/usuarios/usuarioatual", usuarioAtual, (req, res) => {
  res.send({ usuarioAtual: req.usuarioAtual || null })
})

export { router as usuarioAtualRouter }
