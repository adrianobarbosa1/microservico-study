import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

interface UsuarioPayload {
  id: string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      usuarioAtual?: UsuarioPayload
    }
  }
}

export const usuarioAtual = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next()
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UsuarioPayload
    req.usuarioAtual = payload
  } catch (err) {}
  next()
}
