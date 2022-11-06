import express, { Request, Response } from "express"
import { requerAutenticacao } from "@adrtickets/commom"

const router = express.Router()

router.post(
  "/api/tickets",
  requerAutenticacao,
  (req: Request, res: Response) => {
    res.sendStatus(200)
  }
)

export { router as criarTicketRouter }
