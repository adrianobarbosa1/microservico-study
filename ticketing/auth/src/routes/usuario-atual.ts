import express from "express"
import { requerAutenticacao } from "../middlewares/require-auth"
import { usuarioAtual } from "../middlewares/usuario-atual"

const router = express.Router()

router.get(
  "/api/usuarios/usuarioatual",
  usuarioAtual,
  requerAutenticacao,
  (req, res) => {
    res.send({ usuarioAtual: req.usuarioAtual || null })
  }
)

export { router as usuarioAtualRouter }
