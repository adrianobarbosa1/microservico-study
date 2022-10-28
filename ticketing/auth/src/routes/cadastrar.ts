import express, { Request, Response } from "express"
import { body } from "express-validator"
import jwt from "jsonwebtoken"
import { Usuario } from "../models/usuario"
import { BadRequestError } from "../errors/bad-request-error"
import { ValidationRequest } from "../middlewares/validate-request"

const router = express.Router()

router.post(
  "/api/usuarios/cadastrar",
  [
    body("email").isEmail().withMessage("Deve ser um email válido"),
    body("senha")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Senha deve ter entre 4 e 20 caracteres"),
  ],
  ValidationRequest,
  async (req: Request, res: Response) => {
    const { email, senha } = req.body
    console.log(email)
    const existeUsuario = await Usuario.findOne({ email })
    if (existeUsuario) {
      throw new BadRequestError("Email já cadastrado")
    }

    const usuario = Usuario.criar({
      email,
      senha,
    })
    await usuario.save()

    //gerar jwt
    const usuarioJwt = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.JWT_KEY!
    )

    req.session = {
      jwt: usuarioJwt,
    }

    res.status(201).send(usuario)
  }
)

export { router as cadastrarRouter }
