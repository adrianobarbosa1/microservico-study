import express, { Request, Response } from "express"
import { body } from "express-validator"
import jwt from "jsonwebtoken"
import { BadRequestError, ValidationRequest } from "@adrtickets/commom"

import { Usuario } from "../models/usuario"
import { Senha } from "../services/senha"

const router = express.Router()

router.post(
  "/api/usuarios/conectar",
  [
    body("email").isEmail().withMessage("Digite um email valido"),
    body("senha")
      .trim()
      .notEmpty()
      .withMessage("O campo senha não pode ficar vazio!"),
  ],
  ValidationRequest,
  async (req: Request, res: Response) => {
    const { email, senha } = req.body

    const existeUsuario = await Usuario.findOne({ email })
    if (!existeUsuario) {
      throw new BadRequestError("Credenciais inválidas")
    }

    const compareSenha = await Senha.compare(existeUsuario.senha, senha)
    if (!compareSenha) {
      throw new BadRequestError("Credenciais inválidas")
    }

    //gerar jwt
    const usuarioJwt = jwt.sign(
      {
        id: existeUsuario.id,
        email: existeUsuario.email,
      },
      process.env.JWT_KEY!
    )

    req.session = {
      jwt: usuarioJwt,
    }

    res.status(200).send(existeUsuario)
  }
)

export { router as conectarRouter }
