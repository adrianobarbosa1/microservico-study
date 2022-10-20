import express, { Request, Response } from "express"

const router = express.Router()

router.post("/api/usuarios/cadastrar", (req: Request, res: Response) => {
  res.send("hi there")
})

export { router as cadastrarRouter }
