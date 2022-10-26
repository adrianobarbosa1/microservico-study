import { Request, Response, NextFunction } from "express"
import { NotAuthorizedError } from "../errors/not-authorized-error"

export const requerAutenticacao = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.usuarioAtual) {
    throw new NotAuthorizedError()
  }
}
