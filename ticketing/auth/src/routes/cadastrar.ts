import express, { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { RequestValidationError } from "../errors/requestValidationError"
import { DatabaseConnectError } from "../errors/databaseConnectionError"

const router = express.Router()

router.post(
  "/api/usuarios/cadastrar",
  [
    body("email").isEmail().withMessage("Deve ser um email válido"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Senha deve ter entre 4 e 20 caracteres"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())
    }

    console.log("Criando usuario...")
    throw new DatabaseConnectError()
    res.send({})
  }
)

export { router as cadastrarRouter }
